import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	toolbarTitle: {
		flex: 1
	},
	toolbarSecondary: {
		justifyContent: 'space-between',
		overflowX: 'auto'
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0
	}
}));

const Navbar = () => {
	const classes = useStyles();

	return (
		<Toolbar component='nav' variant='dense' className={classes.toolbar}>
			<Typography
				component='h2'
				variant='h5'
				color='inherit'
				align='left'
				noWrap
				className={classes.toolbarTitle}>
				App Logo
			</Typography>

			<Link
				color='inherit'
				noWrap
				variant='body2'
				href='/login'
				className={classes.toolbarLink}>
				Sign in
			</Link>
		</Toolbar>
	);
};

export default Navbar;
