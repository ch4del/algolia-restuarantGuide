import React, { useState, useEffect } from "react";
import TitleBody from "../layouts/TitleBody";
import "./styles.css";
import Category from "./Category";
import { Ratings } from "../ratings/Ratings";

// Define the food types you want to display
const FOOD_TYPES = [
  "Italian",
  "American",
  "Californian",
  "French",
  "Seafood",
  "Japanese",
  "Indian",
];

const Filter = ({ counts = {}, onFilterChange }) => {
  const [category, setCategory] = useState(FOOD_TYPES[0]);
  const [rating, setRating] = useState(null);
  const [payment, setPayment] = useState(null);

  // Filter counts to include only the specified food types
  const filteredCounts = Object.keys(counts)
    .filter((foodType) => FOOD_TYPES.includes(foodType))
    .reduce((obj, key) => {
      obj[key] = counts[key];
      return obj;
    }, {});

  // Function to get the count for a given food type
  const extractFoodTypeCount = (foodType) => {
    return filteredCounts[foodType] || 0;
  };

  useEffect(() => {
    if (category || rating || payment)
      onFilterChange(category, rating, payment);
  }, [category, rating, payment, onFilterChange]);

  return (
    <div className="filter">
      <TitleBody title={"Cuisine/Food Type"}>
        {FOOD_TYPES.map((foodType) => (
          <Category
            key={foodType}
            name={foodType}
            count={extractFoodTypeCount(foodType)}
            isSelected={category === foodType}
            onCatClick={setCategory}
          />
        ))}
      </TitleBody>

      <TitleBody title={"Rating"}>
        <Ratings onRatClick={setRating} />
      </TitleBody>

      <TitleBody title={"Payment Options"} />
    </div>
  );
};

export default Filter;
