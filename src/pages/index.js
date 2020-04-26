import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";
export default () => {
  const { homePageData } = useRouteData();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{homePageData.title}</h1>
      <ul>
        {homePageData.children.map((post) => (
          <li key={post.title}>
            <Link to={`${post.link}/`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
