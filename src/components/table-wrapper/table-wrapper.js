import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "@reach/router";

const useStyles = makeStyles({
  table: {
    minWidth: 320,
    maxWidth: 600,
    justifySelf: "left",
  },
  tableHeader: {
    backgroundColor: "var(--gray-2)",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    letterSpacing: "1px",
  },
});

const TableWrapper = ({
  header,
  row,
  ariaLabel,
  topNode,
  lastNode,
  listNode,
}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label={ariaLabel}>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            {header.map((item, index) => (
              <TableCell className={classes.tableHeaderCell} key={index}>
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow key={row.link}>
              <TableCell align="left">{row.title}</TableCell>
              {!topNode && (
                <TableCell align="left">{row.description}</TableCell>
              )}
              {topNode && (
                <TableCell align="left">
                  <Link to={`${row.link}`}>{row.title}</Link>
                </TableCell>
              )}
              {lastNode && (
                <TableCell align="left">
                  <a href={row.githubLink} target="_blank">
                    {row.title}
                  </a>
                </TableCell>
              )}
              {listNode && (
                <TableCell align="left">
                  <Link to={`${listNode}/${row.link}`}>{row.title}</Link>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableWrapper;
