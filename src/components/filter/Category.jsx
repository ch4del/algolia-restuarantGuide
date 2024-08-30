import React from "react";
import "./styles.css";

const Category = ({ name, count, isSelected, onCatClick }) => {
  return (
    <div
      className={`category ${isSelected ? "selected" : ""}`}
      onClick={() => onCatClick(name)}
    >
      <label className="name">{name}</label>
      <label className="count">{count}</label>
    </div>
  );
};

export default Category;
