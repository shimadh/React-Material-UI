import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Privacy from './Privacy';
import Disclaimer from './Disclaimer';
import About from './About';
import Faq from './Faq';

const ExpansionPanel = withStyles({
	root: {
		border: '1px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
		'&:not(:last-child)': {
			borderBottom: 0
		},
		'&:before': {
			display: 'none'
		},
		'&$expanded': {
			margin: 'auto'
		}
	},
	expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: 'rgba(0, 0, 0, .03)',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56
		}
	},
	content: {
		'&$expanded': {
			margin: '12px 0'
		}
	},
	expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
	root: {
		padding: theme.spacing(2)
	}
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div>
			<ExpansionPanel
				square
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}>
				<ExpansionPanelSummary
					aria-controls='panel1d-content'
					id='panel1d-header'>
					<Typography color='primary'>About us</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<About />
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel
				square
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}>
				<ExpansionPanelSummary
					aria-controls='panel2d-content'
					id='panel2d-header'>
					<Typography color='primary'>FAQ</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Faq />
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<ExpansionPanel
				square
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}>
				<ExpansionPanelSummary
					aria-controls='panel3d-content'
					id='panel3d-header'>
					<Typography color='primary'>Disclaimer</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Disclaimer />
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<ExpansionPanel
				square
				expanded={expanded === 'panel4'}
				onChange={handleChange('panel4')}>
				<ExpansionPanelSummary
					aria-controls='panel4d-content'
					id='panel4d-header'>
					<Typography color='primary'>Privacy</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Privacy />
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}
