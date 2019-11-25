import React from 'react';
// import yup from "yup";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Formik, Form, Field } from 'formik';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import ProgressBar from '../Components/Common/ProgressBar';
import SnakBar from '../Components/Common/SnakBar';
import { TRY_LOGIN } from '../Requests/Login';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

const LoginPage = ({ history }) => {
	const classes = useStyles();
	const client = useApolloClient();
	const [tryLogin, { loading, error }] = useMutation(TRY_LOGIN);

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
						const { login } = data.data;
						localStorage.setItem('token', login.token);
						client.writeData({ data: { isLoggedIn: true } });
						history.push('/home');
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
								autoComplete='email'
								autoFocus
								as={TextField}
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
							/>
							<div>
								{loading ? <ProgressBar /> : null}
								{error ? (
									<SnakBar
										message={error.message}
										variant='error'
									/>
								) : null}
							</div>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								disabled={isSubmitting}>
								Login
							</Button>

							<Grid container>
								<Grid item>
									<Link href='#' variant='body2'>
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
						</Form>
					)}
				</Formik>
			</div>
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
