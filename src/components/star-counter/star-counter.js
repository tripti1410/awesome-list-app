import React from "react";
import { useStar } from "../../client/star/star-context";
import "./star-counter.css";

function StarCounter({ id }) {
  const [star, setStarLocally] = useStar();
  const toggle = () => setStarLocally((star) => ({ ...star, [id]: !star[id] }));

  return (
    <button className="btn btn--primary" onClick={toggle}>
      {star[id] ? "Unstar" : "Star"}
    </button>
  );
}

export default StarCounter;
