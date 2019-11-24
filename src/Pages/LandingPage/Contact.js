import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

const Contact = () => {
	const social = ['Twitter', 'Facebook'];
	const classes = useStyles();

	return (
		<React.Fragment>
			<Paper elevation={0} className={classes.sidebarAboutBox}>
				<Typography variant='h6' gutterBottom color='primary'>
					Contact us
				</Typography>
				<Typography>
					<p>
						If you have any questions or inquiries regarding the
						Maldives e-Government Portal, please contact us.
						services.
					</p>
					<b>Telephone:</b> + (960) 3345050 <br />
					<b>Email:</b> helpdesk@ncit.gov.mv <br />
					<b>Facsimile:</b> + (960) 3344004 <br />
					<p>
						<b>Mail Address</b> <br />
						National Centre for Information Technology <br />
						Kalaafaanu Hingun Male’ <br />
						20064 Maldives
						<br />
					</p>
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
				<Link display='block' variant='body2' href='#' key={network}>
					{network}
				</Link>
			))}
		</React.Fragment>
	);
};

export default Contact;
