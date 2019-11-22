import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	mainHeader: {
		position: 'relative',
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		// backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)'
	},
	mainHeaderContent: {
		position: 'relative',
		padding: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(6),
			paddingRight: 0
		}
	}
}));

const Header = () => {
	const classes = useStyles();

	return (
		<Paper className={classes.mainHeader}>
			{/* Increase the priority of the hero background image */}
			{/* {
            <img
                style={{ display: 'none' }}
                src='https://source.unsplash.com/user/erondu'
                alt='background'
            />
        } */}
			<div className={classes.overlay} />
			<Grid container>
				<Grid item md={6}>
					<div className={classes.mainHeaderContent}>
						<Typography
							component='h1'
							variant='h4'
							color='inherit'
							gutterBottom>
							Maldives e-Government Portal
						</Typography>
						<Typography variant='h6' color='inherit' paragraph>
							The Maldives e-Government Portal is an initiative to
							bring the services of the government closer to the
							people by providing information and services in a
							citizen- centric manner and giving consistent user
							experience to the people of the Maldives in order to
							enhance better quality of life.
						</Typography>
						<Typography variant='h6' color='inherit' paragraph>
							Maldives e-government portal is designed to be a one
							stop shop to government information and services at
							public convenience which increases the availability
							of the information and facilitates a number of
							online government services.
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Header;
