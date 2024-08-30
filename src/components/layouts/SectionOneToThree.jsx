import React from "react";
import "./styles.css";

const SectionOneToThree = ({ sectionOne, sectionThree }) => {
  return (
    <div className="section">
      <div className="sec_one">{sectionOne}</div>
      <div className="sec_three">{sectionThree}</div>
    </div>
  );
};

export default SectionOneToThree;
