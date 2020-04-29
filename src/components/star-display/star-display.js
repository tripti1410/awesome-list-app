import React from "react";
import { useStar } from "../../client/star/star-context";
import "./star-display.css";

function StarDisplay() {
  const [star] = useStar();
  const totalStars = Object.values(star).filter((item) => item).length;

  return <div className="star-display"> Stars: {totalStars} </div>;
}

export default StarDisplay;
