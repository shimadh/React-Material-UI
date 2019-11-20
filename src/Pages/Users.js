import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UsersDataTable from '../Components/Users/UsersDataTable';
import ProgressBar from '../Components/Common/ProgressBar';
import SnakBar from '../Components/Common/SnakBar';
import Summary from '../Components/Common/Summary';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';


const GET_ALL_USERS = gql`
  {
    allUsers{
      id,
      method,
      full_name,
      email,
      dob,
      gender,
      avatar
    }
  }
`;

const headerRows = [
  { id: "select", numeric: false, disablePadding: true, label: "Select" },
  { id: "pic", numeric: false, disablePadding: true, label: "Pic" },
  { id: "username", numeric: true, disablePadding: false, label: "User Name" },
  { id: "logintype", numeric: true, disablePadding: false, label: "Loing Type" },
  { id: "email", numeric: true, disablePadding: false, label: "Email" },
  { id: "dob", numeric: true, disablePadding: false, label: "DOB" },
  { id: "gender", numeric: true, disablePadding: false, label: "Gender" },
  { id: "action", numeric: true, disablePadding: false, label: "Action" }
];


const Users = () => {

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
      <Summary />
      <UsersDataTable
        data={data.allUsers}
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


export default Users