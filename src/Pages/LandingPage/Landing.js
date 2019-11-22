import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import ExpansionPanel from './ExpansionPanel';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles(theme => ({
	mainGrid: {
		marginTop: theme.spacing(3)
	},
	card: {
		display: 'flex'
	},
	cardDetails: {
		flex: 1
	},
	cardMedia: {
		width: 160
	},
	markdown: {
		...theme.typography.body2,
		padding: theme.spacing(3, 0)
	},
	sidebarAboutBox: {
		padding: theme.spacing(2),
		backgroundColor: theme.palette.grey[200]
	},
	sidebarSection: {
		marginTop: theme.spacing(3)
	},
	footer: {
		backgroundColor: theme.palette.background.default,
		marginTop: theme.spacing(8),
		padding: theme.spacing(6, 0)
	}
}));

const social = ['Twitter', 'Facebook'];

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
							<Typography
								variant='h6'
								gutterBottom
								color='primary'>
								About us
							</Typography>
							<ExpansionPanel></ExpansionPanel>
						</Grid>
						{/* End main content */}
						{/* Sidebar */}
						<Grid item xs={12} md={4}>
							<Paper
								elevation={0}
								className={classes.sidebarAboutBox}>
								<Typography
									variant='h6'
									gutterBottom
									color='primary'>
									Contact us
								</Typography>
								<Typography paragraph>
									If you have any questions or inquiries
									regarding the Maldives e-Government Portal,
									please contact us.
								</Typography>
								<Typography paragraph>
									<strong>Telephone:</strong> + (960) 3345050{' '}
									<br />
									<strong>Email:</strong>{' '}
									<a href='mailto:helpdesk@ncit.gov.mv'>
										helpdesk@ncit.gov.mv
									</a>
									<br />
									<strong>Facsimile:</strong> + (960) 3344004
								</Typography>
								<Typography paragraph>
									<strong>Mail Address</strong>
									<br />
									National Centre for Information Technology
									<br />
									Kalaafaanu Hingun Male’
									<br />
									20064 Maldives
								</Typography>
							</Paper>

							<Typography
								variant='h6'
								gutterBottom
								className={classes.sidebarSection}
								color='primary'>
								Social
							</Typography>
							{social.map(network => (
								<Link
									display='block'
									variant='body2'
									href='#'
									key={network}>
									{network}
								</Link>
							))}
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
