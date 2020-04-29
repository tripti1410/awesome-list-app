import React from "react";
import { useRouteData } from "react-static";

import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import PageHeader from "../components/page-header/page-header";
import { Link } from "@reach/router";
import TableWrapper from "../components/table-wrapper/table-wrapper";

export default function SubList() {
  const { item, breadcrumbs, id } = useRouteData();
  console.log(id, "id");
  return (
    <React.Fragment>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/">
          Home
        </Link>

        {breadcrumbs.map((item, index) => (
          <Link
            color="inherit"
            key={`${item.link}-${index}`}
            to={`${item.link}`}
          >
            {item.title}
          </Link>
        ))}
      </Breadcrumbs>
      <PageHeader
        title={item.title}
        description={item.description}
        link={item.githubLink}
        id={id}
      />
      {item.children.length > 0 && (
        <TableWrapper
          header={["Item", "Description", "Link"]}
          row={item.children}
          ariaLabel={`table showing items of ${item.title}`}
          lastNode={true}
        />
      )}
    </React.Fragment>
  );
}
