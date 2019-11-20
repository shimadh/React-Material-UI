import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TableHeading from '../Common/TableHeading';
import TableColumNames from '../Common/TableColumNames';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';



const CategoryDataTable = ({ headerRows, data }) => {

  const classes = useStyles();


  return (

    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableHeading name={'Main Categories'} />
        <div className={classes.tableWrapper}>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <TableColumNames rows={headerRows} />
            <TableBody>
              {data.map(x =>(
                <TableRow
                  hover
                  role="checkbox"
                  aria-checked={false}
                  tabIndex={-1}
                  key={x.id}
                  selected={false}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={false}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">{x.category_name}</TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    <Grid container justify="left" alignItems="left">
                      <Avatar alt="Remy Sharp" src={x.category_image} className={classes.avatar} />
                    </Grid>
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    <Grid container justify="left" alignItems="left">
                      <Avatar alt="Remy Sharp" src={x.cat_addvert_img} className={classes.avatar} />
                    </Grid>
                  </TableCell>
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    </div>

  );


}


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: 10,
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));


export default CategoryDataTable


