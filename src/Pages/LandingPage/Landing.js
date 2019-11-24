import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar';
import Header from './Header';
import ExpansionPanel from './ExpansionPanel';
import Contact from './Contact';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
	mainGrid: {
		marginTop: theme.spacing(3)
	},

	footer: {
		backgroundColor: theme.palette.background.default,
		marginTop: theme.spacing(8),
		padding: theme.spacing(6, 0)
	}
}));

export default function Blog() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Navbar />

				<main>
					{/* Main header */}
					<Header />
					{/* End main header */}

					<Grid container spacing={5} className={classes.mainGrid}>
						{/* Main content */}
						<Grid item xs={12} md={8}>
							<ExpansionPanel></ExpansionPanel>
						</Grid>
						{/* End main content */}
						{/* Sidebar */}
						<Grid item xs={12} md={4}>
							<Contact />
						</Grid>
						{/* End sidebar */}
					</Grid>
				</main>
			</Container>
			{/* Footer */}
			<footer className={classes.footer}>
				<Container maxWidth='lg'>
					<Footer />
				</Container>
			</footer>
			{/* End footer */}
		</React.Fragment>
	);
}
