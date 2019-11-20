import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


const Login = props => {

  const classes = useStyles();

  const handleSubmit = () => {
    console.log(props)
  }

  return (
    <div className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
      <TextField
        id="filled-secondary"
        label="Filled secondary"
        variant="filled"
        color="secondary"
      />
      <TextField
        id="outlined-secondary"
        label="Outlined secondary"
        variant="outlined"
        color="secondary"
      />
    </form>
    </div>
  )

}

const useStyles = makeStyles(theme => ({
  container:{
    display: 'flex',
    flexDirection: 'colum',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

export default Login;