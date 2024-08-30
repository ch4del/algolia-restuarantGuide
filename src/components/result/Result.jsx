import React from "react";
import "./styles.css";
import { Rating } from "../ratings/Ratings";

const Result = ({ res }) => {
  // const filterPaymentOptions = (options) => {
  //   const acceptedPayments = ["AMEX", "Visa", "Discover", "MasterCard"];
  //   const paymentSet = new Set();

  //   options.forEach((option) => {
  //     if (option === "Diners Club" || option === "Carte Blanche") {
  //       paymentSet.add("Discover");
  //     } else if (acceptedPayments.includes(option)) {
  //       paymentSet.add(option);
  //     }
  //   });
  //   return Array.from(paymentSet);
  // };

  // const paymentOptions = filterPaymentOptions(res.payment_options);

  return (
    <div className="result_container">
      <img
        src={res.image_url || "default_image.png"}
        alt={res.name || "Restaurant Image"}
        className="result_image"
      />
      <div className="details">
        <a
          href={res.reserve_url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="title"
        >
          {res.name || "No name available"}
        </a>
        <Rating score={res.stars_count || 0} reviews={res.reviews_count || 0} />
        <label className="info">
          {res.food_type || "Unknown"} | {res.neighborhood || "Unknown"} |{" "}
          {res.price_range || "Unknown"}
        </label>
        <label className="address">
          {res.address || "Address not available"}, {res.city || "City not available"}, {res.state || "State not available"} {res.postal_code || "Postal Code not available"}
        </label>
        <label className="phone">
          Phone: {res.phone || "No phone available"}
        </label>
        <label className="payment_options">
          Payment Options: {res.payment_options?.join(", ")}
        </label>
      </div>
    </div>
  );
};

export default Result;
