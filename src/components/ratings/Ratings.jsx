import React from "react";
import StarOn from "../../assets/icons/star-on.png";
import StarOff from "../../assets/icons/star-off.png";
import "./styles.css";

export const Ratings = ({ onRatClick }) => {
  return (
    <div className="ratings_container">
      {[...Array(6)].map((_, i) => (
        <Rating score={i} forceHide={true} onRatClick={onRatClick} />
      ))}
    </div>
  );
};

export const Rating = ({ score, reviews, onRatClick, forceHide = false }) => {
  return (
    <div className="rating_container" onClick={() => onRatClick(score)}>
      {!forceHide && score && <div className="score">{score}</div>}
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star isOn={parseInt(score) > i} />
        ))}
      </div>
      {!forceHide && reviews && (
        <div className="reviews">{reviews} reviews</div>
      )}
    </div>
  );
};

const Star = ({ isOn }) => {
  return <img src={isOn ? StarOn : StarOff} alt="star" />;
};
