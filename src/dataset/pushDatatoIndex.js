const algoliasearch = require('algoliasearch');
const fs = require('fs');
const path = require('path');

// Replace with your Algolia App ID and Admin API Key
const client = algoliasearch('O2MU8VNX3A', '0f0b73141abb832b0124a461bd52750c');
// const client = algoliasearch('IO3ML6J0JU', 'e85861273e87cafa33af90036e0ec8ee');

  
// Initialize the index
const index = client.initIndex('restaurants');

// Path to the JSON file on your local hard drive
const filePath = 'C:/Users/adchakro/source/algolia/dataset/merged_data.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  try {
    const records = JSON.parse(data);

    // Push the data to the Algolia index
    index
      .saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
      .then(({ objectIDs }) => {
        console.log('Data imported successfully:', objectIDs);
      })
      .catch((error) => {
        console.error('Error importing data to Algolia:', error);
      });
  } catch (parseError) {
    console.error('Error parsing the JSON data:', parseError);
  }
});
