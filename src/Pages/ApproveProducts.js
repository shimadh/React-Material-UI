import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import ApproveProductsTable from '../Components/Products/ApproveProductsTable';
import ProgressBar from '../Components/Common/ProgressBar';
import SnakBar from '../Components/Common/SnakBar';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


const GET_ALL_USERS = gql`
  {
    allProducts{
      id,
      product_code,
      product_name,
      product_price,
      stock,
      shop{
        id,
        shop_name,
        owner{
          id,
          full_name
        }
      },
      category{
        id,
        category_name
      }
      images(limit: 1){
        id,
        product_image
      }
    }
  }
`;

const headerRows = [
  { id: "id", numeric: false, disablePadding: true, label: "#" },
  { id: "pic", numeric: false, disablePadding: true, label: "Pic" },
  { id: "code", numeric: true, disablePadding: false, label: "Product Code" },
  { id: "name", numeric: true, disablePadding: false, label: "Product Name" },
  { id: "email", numeric: true, disablePadding: false, label: "Product Price" },
  { id: "dob", numeric: true, disablePadding: false, label: "Stock" },
  { id: "gender", numeric: true, disablePadding: false, label: "Category" },
  { id: "action", numeric: true, disablePadding: false, label: "Shop" },
  { id: "action", numeric: true, disablePadding: false, label: "Seller" },
  { id: "action", numeric: true, disablePadding: false, label: "Action" }
];


const ApproveProducts = () => {

  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <ProgressBar />;
  if (error){
    return <SnakBar 
      message={error.message} 
      variant="error"
    />;
  }


  return (

    <div className={classes.root}>
      <ApproveProductsTable
        data={data.allProducts}
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


export default ApproveProducts