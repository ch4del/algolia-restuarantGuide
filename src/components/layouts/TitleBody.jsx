import React from "react";

const TitleBody = ({ title, children }) => {
  return (
    <div className="section_title">
      <label className="title">{title}</label>
      <div className="body">{children}</div>
    </div>
  );
};

export default TitleBody;
