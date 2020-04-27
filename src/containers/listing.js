import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";
import Breadcrumbs from "./breadcrumbs";

export default function Listing() {
  const { list, breadcrumbs } = useRouteData();
  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h3>{list.title}</h3>
      <ul>
        {list.children.map((item) => (
          <li key={item.link}>
            <Link to={`${list.link}/${item.link}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
