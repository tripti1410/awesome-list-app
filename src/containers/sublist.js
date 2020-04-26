import React from "react";
import { useRouteData } from "react-static";

export default function SubList() {
  const { item } = useRouteData();
  return (
    <div>
      <h3>{item.title}</h3>
      <ul>
        {item.children.map((node) => (
          <li key={node.title}>{node.title}</li>
        ))}
      </ul>
    </div>
  );
}
