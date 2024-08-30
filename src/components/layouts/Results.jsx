import React from "react";
import "./styles.css";
import Images from "../../assets/images/background.png";
import Result from "../result/Result";


const Results = ({ onPageChange , searchResults = [], seconds = 0 , showMoreResults = false}) => {
  return (
    <div className="results_container">
      <label>
        {searchResults.length > 0 ? (
          <span>
            <strong>
              {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} found
            </strong>{" "}
            in {seconds} seconds
          </span>
        ) : (
          "No results found"
        )}
      </label>
      <div className="results">
        {searchResults.map(res => 
          <Result res={res} />
        )} 
      </div>
      <div className={`button ${showMoreResults ? "" : "hidden"}`} onClick={()=>onPageChange()}>Show More</div>
    </div>
  );
};

export default Results;

// import React, { useState, useEffect } from "react";
// import "./styles.css";
// import Result from "../result/Result";

// const Results = ({ onPageChange , searchResults = [] }) => {
//   const [displayedResults, setDisplayedResults] = useState([]);

//   // Update displayedResults when searchResults changes
//   useEffect(() => {
//     // Directly set displayedResults from searchResults
//     setDisplayedResults(searchResults);
//   }, [searchResults]); // Ensure this effect runs only when searchResults changes

//   return (
//     <div className="results_container">
//       <label>
//         <strong>
//           {searchResults.length > 0
//             ? `Results found for "${userQuery}"`
//             : "No results found"}
//         </strong>
//       </label>
//       <div className="results">
//         {displayedResults.length > 0 ? (
//           displayedResults.map((restaurant, index) => (
//             <Result key={index} res={restaurant} />
//           ))
//         ) : (
//           <p>No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Results;
