import React, { useState, useEffect, useRef } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import algoliasearchHelper from 'algoliasearch-helper';

import "./styles.css";

const searchClient = algoliasearch("O2MU8VNX3A", "73c5b822204a793fb2fd521353a63b25");
const indexName = "restaurants";

const helper = algoliasearchHelper(searchClient, 'restaurants', {
  facets: ['*'],
  hitsPerPage: 10,
});

const Searchbar = ({onResults, page}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const isMounted = useRef(false)

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onResults(searchTerm)
  };
  

  return (
    <searchbar>
      <div className="nav_bar">
        <input
          className="nav_bar__input"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for Restaurants by Name, Cuisine, Location"
        />
      </div>
      <div className="profile_icons">
      <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </searchbar>
  );
};

export default Searchbar;
