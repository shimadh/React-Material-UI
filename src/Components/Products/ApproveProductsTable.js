import React from "react";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHeading from "../Common/TableHeading";
import TableColumNames from "../Common/TableColumNames";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ApproveProductDataTable = ({ headerRows, data }) => {
  const classes = useStyles();

  const showDetailView = id => {};

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableHeading name={"Approve Products"} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <TableColumNames rows={headerRows} />
            <TableBody>
              {data.map(x => (
                <TableRow
                  hover
                  role="checkbox"
                  aria-checked={false}
                  key={x.id}
                  selected={false}
                >
                  <TableCell component="th" scope="row" padding="none">
                    {x.id}
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    <Grid container justify="center" alignItems="center">
                      <Avatar
                        alt="Remy Sharp"
                        src={x.images[0].product_image}
                        className={classes.avatar}
                      />
                    </Grid>
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    {x.product_code}
                  </TableCell>
                  <TableCell align="left">
                    {String(x.product_name).substr(0, 20)}
                  </TableCell>
                  <TableCell align="left">{x.product_price} MVR</TableCell>
                  <TableCell align="left">{x.stock}</TableCell>
                  <TableCell align="left">
                    {x.category[0].category_name}
                  </TableCell>
                  <TableCell align="left">{x.shop[0].shop_name}</TableCell>
                  <TableCell align="left">
                    {x.shop[0].owner[0].full_name}
                  </TableCell>
                  <TableCell align="center">
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  paper: {
    padding: 20,
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: "auto"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));

export default ApproveProductDataTable;
