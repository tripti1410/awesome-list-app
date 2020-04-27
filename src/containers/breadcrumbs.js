import React from "react";
import { Link } from "../components/Router";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <div className="breadcrum">
      <Link to="/">Home</Link> / &nbsp;
      {breadcrumbs.map((item, index) => (
        <Link key={`${item.link}-${index}`} to={`${item.link}`}>
          {item.title} /
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumbs;
