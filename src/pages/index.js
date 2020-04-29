import React from "react";
import { useRouteData } from "react-static";
import { Link } from "components/Router";

import PageHeader from "../components/page-header/page-header";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import TableWrapper from "../components/table-wrapper/table-wrapper";

export default () => {
  const { jsonData: contents } = useRouteData();

  return (
    <React.Fragment>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/">
          Home
        </Link>
      </Breadcrumbs>
      <PageHeader title={contents.title} />
      {contents.children.length > 0 && (
        <TableWrapper
          header={["Topics", "Links"]}
          row={contents.children}
          ariaLabel={`table showing items of ${contents.title}`}
          topNode={true}
        />
      )}
    </React.Fragment>
  );
};
