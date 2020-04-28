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
      <PageTitle title={list.title} description={list.description} />
      {list.children.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>List</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.children.map((row) => (
                <TableRow key={row.link}>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="left">
                    <Link to={`${list.link}/${row.link}`}>{row.title}</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </React.Fragment>
  );
}
