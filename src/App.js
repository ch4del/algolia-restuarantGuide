import "./App.css";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Filter from "./components/filter/Filter";
import Results from "./components/layouts/Results";
import SectionOneToThree from "./components/layouts/SectionOneToThree";
import Searchbar from "./components/searchbar/Searchbar";
import algoliaPOSTrequest from "./AlgoliaTest";

const App = () => {
  const [foodTypeCounts, setFoodTypeCounts] = useState([]); // using this state variable to grab the foot-type restuarant counts on startup
  const [results, setResults] = useState([]); // state variable used to render the results. Used by results.jsx component
  const [pageNr, setPageNr] = useState(0);    
  const [canShowMoreResults, setCanShowMoreResults] = useState(false);
  const queryRef = useRef("");
  const [filter, setFilter] = useState([]);

  // This function get the query from the searchBar and sends a POST request to my algolia index with the search query
  // It also receives the reply and then processes it. 
  const handleSearchResults = async (query = "", isNextPage = false) => {
    let page = pageNr;
    if (query.length > 0) queryRef.current = query;
    else {
      page = 0;
      setPageNr(0);
    }

    if (isNextPage) {
      page = pageNr + 1;
      setPageNr((prev) => prev + 1);
    }

    let res = await algoliaPOSTrequest(query, page);
    console.log(res);
    setCanShowMoreResults(results?.length <= res?.nbHits);

    if (isNextPage) return res;
    setResults(res?.hits);
  };

  const handleFilters = useCallback((byCuisine, byRating, byPaymentOption) => {
    let filterOptions = [];

    if (byCuisine) filterOptions.push(`food_type:${byCuisine}`);
    if (byRating) filterOptions.push(`stars_count:${byRating}`);
    if (byPaymentOption)
      filterOptions.push(`payment_options:${byPaymentOption}`);

    setFilter(filterOptions);
  }, []);

  useEffect(() => {
    const filterResults = async () => {
      let res = await algoliaPOSTrequest(queryRef.current, 0, [], filter);
      setResults(res?.hits);
    };

    if (filter.length > 0) filterResults();
  }, [filter]);

  // get food_type filter along with the count of items to populate the filters on the left sidebar
  // function is called once on start of app
  useEffect(() => {
    // Function to fetch counts for each food-type
    const fetchFoodTypeCounts = async () => {
        // Make a single request to get all facet counts
        const response = await algoliaPOSTrequest("", 0, ["food_type"], "");

        // Extract the facet counts from the response
        const foodTypeFacetCounts = response?.facets?.food_type || {};

        // Set the food type counts state
        setFoodTypeCounts(foodTypeFacetCounts);
    };
    fetchFoodTypeCounts();
  }, []);

  const nextPage = async () => {
    let res = await handleSearchResults(queryRef.current, true);
    setResults((prev) => [...prev, ...res.hits]);
  };

  return (
    <div className="page">
      <div className="container">
        <Searchbar onResults={handleSearchResults} page={pageNr} />
        <SectionOneToThree
          sectionOne={
            <Filter counts={foodTypeCounts} onFilterChange={handleFilters} />
          }
          sectionThree={
            <Results
              searchResults={results}
              onPageChange={nextPage}
              showMoreResults={canShowMoreResults}
            />
          }
        />
      </div>
    </div>
  );
};

export default App;
