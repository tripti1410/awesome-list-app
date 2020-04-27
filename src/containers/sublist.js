import React from "react";
import { useRouteData } from "react-static";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import PageTitle from "../components/page-title/page-title";
import { Link } from "@reach/router";

export default function SubList() {
  const { item, breadcrumbs } = useRouteData();
  return (
    <div>
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
      <PageTitle
        title={item.title}
        description={item.description}
        link={item.githubLink}
      />
      {item.children.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {item.children.map((row) => (
                <TableRow key={row.link}>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="left">
                    <a href={row.githubLink} target="_blank">
                      {row.title}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
