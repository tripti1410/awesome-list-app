import React from "react";
import { useStar } from "../../client/star/star-context";

function StarDisplay() {
  const [star] = useStar();
  const totalStars = Object.values(star).filter((item) => item).length;
  return <div>Total Stars {totalStars} </div>;
}

export default StarDisplay;
