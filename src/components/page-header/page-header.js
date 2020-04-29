import React from "react";
import "./page-header.css";
import StarCounter from "../star-counter/star-counter";

const PageHeader = ({ title, description, link, id }) => {
  return (
    <div className="page-header-container">
      <h1>
        {link ? (
          <a href={`${link}`} target="_blank">
            {title}
          </a>
        ) : (
          title
        )}
      </h1>
      {id && <StarCounter id={id} />}
      {description && <p>{description}</p>}
    </div>
  );
};

export default PageHeader;
