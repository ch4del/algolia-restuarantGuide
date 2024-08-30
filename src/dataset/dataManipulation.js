const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Paths to your data files
const jsonFilePath = path.join(__dirname, 'restaurants_list.json');
const csvFilePath = path.join(__dirname, 'restaurants_info.csv');
const outputFilePath = path.join(__dirname, 'merged_data.json');

// Step 1: Read and parse the JSON file
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

// Step 2: Create a map for quick lookup based on objectID
const jsonMap = new Map();
jsonData.forEach(item => {
    jsonMap.set(item.objectID, item);
});

// Step 3: Read and merge the CSV file with the JSON data
fs.createReadStream(csvFilePath)
  .pipe(csv({ separator: ';' })) // Use the correct separator
  .on('data', (row) => {
    const objectID = parseInt(row.objectID, 10);
    if (jsonMap.has(objectID)) {
      const jsonItem = jsonMap.get(objectID);

      // Merge the data from CSV into the corresponding JSON object
      jsonMap.set(objectID, {
        ...jsonItem,
        food_type: row.food_type,
        stars_count: parseFloat(row.stars_count),
        reviews_count: parseInt(row.reviews_count, 10),
        neighborhood: row.neighborhood,
        phone: row.phone_number, // Overwrite the phone number
        price_range: row.price_range,
        dining_style: row.dining_style,
      });
    }
  })
  .on('end', () => {
    // Step 4: Convert the merged data back to an array
    const mergedData = Array.from(jsonMap.values());

    // Step 5: Write the merged data to a new JSON file
    fs.writeFileSync(outputFilePath, JSON.stringify(mergedData, null, 2));
    console.log('Merging complete. Merged data saved to:', outputFilePath);
  });
