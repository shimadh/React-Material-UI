import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import CategoryDataTable from '../Components/Category/CategoryDataTable';
import ProgressBar from '../Components/Common/ProgressBar';
import SnakBar from '../Components/Common/SnakBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


const GET_ALL_CATEGORIES = gql`
  {
    mainCategories{
      id,
      category_name,
      category_image,
      cat_addvert_img
    }
  }
`;

const headerRows = [
  { id: "", numeric: false, disablePadding: true, label: "" },
  { id: "categoryname", numeric: false, disablePadding: true, label: "Category Name" },
  { id: "picture", numeric: false, disablePadding: true, label: "Category Picture" },
  { id: "addpicture", numeric: true, disablePadding: false, label: "Advert Picture" },
];


export const BeeCategories = () => {

  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

  if (loading) return <ProgressBar />;
  if (error){
    return <SnakBar 
      message={error.message} 
      variant="error"
    />;
  }

  return (

    <div className={classes.root}>
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
            <ListItem>
                <NavLink to="/newcategory">
                  <ListItemText primary="Add Category" />
                </NavLink>
              </ListItem>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <CategoryDataTable
        data={data.mainCategories}
        headerRows={headerRows}
      />
    </div>

  );


}


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  }
}));

export default BeeCategories