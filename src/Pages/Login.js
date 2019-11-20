import React from "react";
// import yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { Formik, Form, Field } from "formik";
import Avatar from "@material-ui/core/Avatar";
import { useMutation } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';

import '../Styles/Login.css';
import { TRY_LOGIN } from '../Requests/Login';

import * as authAction from '../Store/authActions';



const LoginPage = props => {

  const classes = useStyles();
  const [ tryLogin ] = useMutation(TRY_LOGIN);
  const dispatch = useDispatch();

  return (
    
    <div className="login-container">
      <Paper className={classes.container}>
        <div className={classes.header}>
          <div>
            <Avatar
              src="../Assets/AppImages/app-logo.jpg"
              className={classes.avatar}
            />
          </div>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            const data = await tryLogin({
              variables: {
                email: values.email,
                password: values.password
              }
            });
            setSubmitting(false);
            const { signin } = data.data;
            dispatch(authAction.authSetToken(signin.token, signin.user));
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <div>
                <Field
                  type="input"
                  name="email"
                  placeholder="Email"
                  as={TextField}
                  className={classes.textField}
                />
              </div>
              <div>
                <Field 
                  type="password"
                  name="password"
                  placeholder="Password"
                  as={TextField}
                  className={classes.textField}
                />
              </div>
              <div>
                <button
                  className={classes.button}
                  type="submit"
                  disabled={isSubmitting}
                  component={Button}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    padding: 20,
    width: "30%",
    height: "40%"
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  button: {
    border: 1,
    borderRadius: 3,
    height: 40,
    padding: "0 20px",
    color: "#fff",
    marginRight: 5,
    cursor: "pointer",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  input: {
    display: "none"
  },
  textField: {
    paddingBottom: 20,
    width: "100%"
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



export default LoginPage;