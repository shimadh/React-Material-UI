import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ProgressBar from '../../Components/Common/ProgressBar';
import SnakBar from '../../Components/Common/SnakBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const GET_SHOP = gql`
  query GetShop($shopId: Int!){
    getShop(shopId: $shopId){
      id,
      shop_name,
      shop_picture
    }
  }
`;

const ShopView = props => {

  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_SHOP, {
    variables: { shopId: parseInt(props.match.params.id) },
  });

  console.log('hfhfhf', data.getShop);

  return (

    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Shop Name</TableCell>
                  <TableCell component="th" scope="row">{data}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};



const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  paper: {
    width: "100%",
    padding: 10,
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

export default ShopView;
