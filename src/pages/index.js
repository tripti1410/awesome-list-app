import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";

export default () => {
  const { jsonData } = useRouteData();

  return (
    <div>
      <h1>{jsonData.title}</h1>
      <ul>
        {jsonData.children.map((post) => (
          <li key={post.title}>
            <Link to={`${post.link}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
