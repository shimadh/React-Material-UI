import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const Summary = props => {

  const classes = useStyles();

  return  (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">Total Users</TableCell>
            <TableCell align="right">5K</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Total Females</TableCell>
            <TableCell align="right">10K</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Total Males</TableCell>
            <TableCell align="right">3K</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>

  )

}

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

export default Summary;