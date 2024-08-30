// import React, { useState, useEffect } from "react";
// import { FiHeart } from "react-icons/fi";
// import { AiOutlineUserAdd } from "react-icons/ai";
// import { algoliasearch } from "algoliasearch"; 
// import algoliasearchHelper from "algoliasearch-helper";
// import "./styles.css";

// // Initialize Algolia client and helper
// const searchClient = algoliasearch("O2MU8VNX3A", "73c5b822204a793fb2fd521353a63b25");
// const indexName = "restaurants";
// const helper = algoliasearchHelper(searchClient, indexName, {
//   hitsPerPage: 10,
// });


// const Searchbar = ({ setResults, setCount, setSeconds, setLoading }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     helper.on("result", (content) => {
//       setResults(content.hits);
//       setCount(content.nbHits);
//       setSeconds(content.processingTimeMS / 1000);
//       setLoading(false);
//     });

//     return () => {
//       helper.removeAllListeners("result");
//     };
//   }, [setResults, setCount, setSeconds, setLoading]);

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);

//     // Clear previous timeout
//     if (typingTimeout) {
//       clearTimeout(typingTimeout);
//     }

//     setTypingTimeout(
//       setTimeout(() => {
//         if (value.trim() === "") {
//           setResults([]); // Clear results if search term is empty
//           setCount(0);
//           setSeconds(0);
//           setLoading(false);
//         } else {
//           setLoading(true);
//           helper.setQuery(value).search();
//         }
//       }, 300)
//     );
//   };

//   return (
//     <div className="nav_bar">
//       <input
//         className="nav_bar__input"
//         type="text"
//         value={searchTerm}
//         onChange={handleInputChange}
//         placeholder="Search for Restaurants by Name, Cuisine, Location"
//       />
//       <div className="profile_icons">
//         <a href="#">
//           <FiHeart className="nav-icons" />
//         </a>
//         <a href="#">
//           <AiOutlineUserAdd className="nav-icons" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Searchbar;
