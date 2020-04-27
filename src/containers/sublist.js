import React from "react";
import { useRouteData } from "react-static";
import Breadcrumbs from "./breadcrumbs";

export default function SubList() {
  const { item, breadcrumbs } = useRouteData();
  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h3>{item.title}</h3>
      <ul>
        {item.children.map((node) => (
          <li key={node.title}>
            <span>{node.title}</span>
            <span>{node.description}</span>
            <span>
              <a href={node.githubLink} target="_blank">
                link
              </a>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
