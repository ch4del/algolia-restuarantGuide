import Axios from "axios";

const APPLICATION_ID = "O2MU8VNX3A";
const ADMIN_API_KEY = "73c5b822204a793fb2fd521353a63b25"; // According to the documentation, thie API is public hence I left here instead of a .env file
const INDEX_NAME = "restaurants";

const axios = Axios.create({
  baseURL: `https://${APPLICATION_ID}-dsn.algolia.net`,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});


const algoliaPOSTrequest = async (
  searchString,
  pageNr = 0,
  searchFacets = [],
  searchFilter = ""
) => {
  try {
    // Define the request body based on whether the search string, facets, or filter is provided
    const requestBody = {
      hitsPerPage: 5,
      page: pageNr,
      ...(searchString.length > 0 && {
        query: searchString,
      }),
      ...(searchFacets.length > 0 && {
        facets: searchFacets, 
      }),
      ...(searchFilter.length > 0 && {
        facetFilters: searchFilter,
      }),
    };

    // Send POST request to Algolia
    const response = await axios.post(
      `/1/indexes/${INDEX_NAME}/query`,
      requestBody,
      {
        headers: {
          "X-Algolia-API-Key": ADMIN_API_KEY,
          "X-Algolia-Application-Id": APPLICATION_ID,
          "Content-Type": "application/json",
        },
      }
    );

    // Log results for debugging
    console.log("Results:", response.data);

    // Return response data
    return response.data;
  } catch (err) {
    // Handle errors
    console.error("Error:", err.message);
    return null;
  }
};


export default algoliaPOSTrequest;
