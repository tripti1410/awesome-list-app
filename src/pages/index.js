import React from "react";
import { useRouteData } from "react-static";
//
import { Link } from "components/Router";
import PageTitle from "../components/page-title/page-title";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

export default () => {
  const { jsonData: contents } = useRouteData();

  return (
    <React.Fragment>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" to="/">
          Home
        </Link>
      </Breadcrumbs>
      <PageTitle title={contents.title} />

      {contents.children.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Topics</TableCell>
                <TableCell align="left">link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contents.children.map((row) => (
                <TableRow key={row.link}>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">
                    <Link to={`${row.link}`}>{row.title}</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </React.Fragment>
  );
};
