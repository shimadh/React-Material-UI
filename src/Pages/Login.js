import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Formik, Form, Field } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';
import { TRY_LOGIN } from '../Requests/Login';
import * as authAction from '../Store/authActions';
import Footer from './../Components/Common/Footer';

const LoginPage = props => {
	const classes = useStyles();
	const [tryLogin] = useMutation(TRY_LOGIN);
	const dispatch = useDispatch();

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<Formik
					initialValues={{ email: '', password: '' }}
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
						dispatch(
							authAction.authSetToken(signin.token, signin.user)
						);
					}}>
					{({ values, isSubmitting }) => (
						<Form className={classes.form} noValidate>
							<Field
								variant='outlined'
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								as={TextField}
								autoComplete='email'
								autoFocus
								className={classes.textField}
							/>

							<Field
								variant='outlined'
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								as={TextField}
								className={classes.textField}
							/>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit}
								disabled={isSubmitting}>
								Sign In
							</Button>
						</Form>
					)}
				</Formik>
				<form className={classes.form} noValidate>
					<Grid container justify='center' alignItems='center'>
						<Grid item>
							<Link component='button' variant='body2'>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Footer />
			</Box>
		</Container>
	);
};

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default LoginPage;
