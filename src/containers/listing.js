import React from "react";
import { useRouteData } from "react-static";
import { Link } from "components/Router";

import PageHeader from "../components/page-header/page-header";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import TableWrapper from "../components/table-wrapper/table-wrapper";

export default function Listing() {
  const { list, breadcrumbs } = useRouteData();
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
      <PageHeader title={list.title} description={list.description} />
      {list.children.length > 0 && (
        <TableWrapper
          header={["List", "Description", "Link"]}
          row={list.children}
          ariaLabel={`table showing items of ${list.title}`}
          listNode={list.link}
        />
      )}
    </React.Fragment>
  );
}
