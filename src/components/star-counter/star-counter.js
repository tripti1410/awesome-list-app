import React from "react";
import { useStar } from "../../client/star/star-context";

function StarCounter() {
  const [star, setStar] = useStar();
  const path = window.location.pathname;
  const toggle = () => setStar((star) => ({ ...star, [path]: !star[path] }));
  return <button onClick={toggle}>{star[path] ? "Unstar" : "Star"}</button>;
}

export default StarCounter;
