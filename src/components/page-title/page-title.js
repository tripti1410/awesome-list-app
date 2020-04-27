import React from "react";
import "./page-title.css";

const PageTitle = ({ title, description, link }) => {
  return (
    <div className="page-title-container">
      <h1>{title}</h1>
      {link && (
        <a href={`${link}`} target="_blank">
          link
        </a>
      )}
      {description && <p>{description}</p>}
    </div>
  );
};

export default PageTitle;
