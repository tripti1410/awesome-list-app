import React from "react";
import { useStar } from "../../client/star/star-context";

function StarCounter(id) {
  const [star, setStar] = useStar();
  const toggle = () => setStar((star) => ({ ...star, [id]: !star[id] }));
  return <button onClick={toggle}>{star[id] ? "Unstar" : "Star"}</button>;
}

export default StarCounter;
