import React from 'react';
import { lighten, makeStyles } from '@material-ui/core/styles';
import ShopDataTable from '../Components/Shop/ShopDataTable';
import ProgressBar from '../Components/Common/ProgressBar';
import SnakBar from '../Components/Common/SnakBar';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


const GET_ALL_SHOPS = gql`
  {
    allShops{
      id,
      shop_name,
      shop_contact_number,
      isVerified,
      shop_picture
      owner{
        id,
        full_name
      }
    }
  }
`;

const headerRows = [
  { id: "select", numeric: false, disablePadding: true, label: "Select" },
  { id: "pic", numeric: false, disablePadding: true, label: "Pic" },
  { id: "shopname", numeric: false, disablePadding: true, label: "Shop Name" },
  { id: "verified", numeric: false, disablePadding: true, label: "Verification" },
  { id: "contactnumber", numeric: true, disablePadding: false, label: "Contact Number" },
  { id: "owner", numeric: true, disablePadding: false, label: "Shop Owner" },
  { id: "action", numeric: true, disablePadding: false, label: "Action" }
];


export const BeeShops = () => {

  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_ALL_SHOPS);

  if (loading) return <ProgressBar />;
  if (error){
    return <SnakBar 
      message={error.message} 
      variant="error"
    />;
  }

  return (

    <div className={classes.root}>
      <ShopDataTable
        data={data.allShops}
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

export default BeeShops