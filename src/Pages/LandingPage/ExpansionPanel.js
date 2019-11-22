import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Privacy from './Privacy';
import Feedback from './Feedback';

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
					<Typography color='primary'>Design</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						Maldives e-Government Portal is designed in a simple and
						clean manner to help you find the information you need
						quickly and easily. The homepage presents as much
						relevant information as possible without overwhelming
						the visitor with links. You can find information
						according to Subjects. e.g.: Education, Health,
						Transport etc. If you want to find information related
						to certain age group, then you can find them in the
						Audience section. e.g.: Parents, Youth, and Jobseekers
						etc. If you want to find out a procedure e.g.: How do I
						get a Driving License etc, you can visit the I Want to
						section. To find information according to the first
						letter please visit the A-Z listing section.
					</Typography>
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
					<Typography paragraph>
						<b variant='subtitle2'>
							What is the Maldives e-Government Portal?{' '}
						</b>
						<br />
						The Maldives e-Government Portal is an initiative to
						bring the services of the government closer to the
						people by providing information and services in a
						citizen-centric manner and giving consistent user
						experience to the people of the Maldives in order to
						enhance better quality of life. <br /> <br />
						<b variant='subtitle1'>
							How do I find Information on the Maldives
							e-Government portal?
						</b>
						<br />
						Information can be found by the following ways:
						<br />
						<b variant='subtitle2'>Subject</b> [E.g.: Education,
						Health, Tourism, Housing & Construction, Employment
						etc...] <br />
						<b variant='subtitle2'>Audience</b> [Parents, Youth,
						etc…] <br />
						<b variant='subtitle2'>I want to...</b> [e.g.: I want to
						get a driving license, I want to obtain a passport etc…]{' '}
						<br />
						<b variant='subtitle2'>A-Z listing </b> [by
						organization, by person, by services]
						<br /> <br />
						<b variant='subtitle2'>
							Who manages the Maldives e-Government Portal?
						</b>
						<br />
						The Maldives e-Government Portal is managed by National
						Centre for Information Technology (NCIT). <br /> <br />
						<b variant='subtitle2'>
							Who changes/updates the contents on the Maldives
							e-Government Portal?
						</b>
						<br />
						The individual organization’s or agency's focal point is
						responsible for changing and updating their respective
						sections or information. <br /> <br />
						<b variant='subtitle2'>What is e-Government?</b> <br />
						E-Government is the use of Information and Communication
						Technology (ICT) to promote more efficient and
						cost-effective government and to facilitate more
						convenient government services to a greater public
						audience and to make government more accountable to
						citizens.
					</Typography>
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
					<Typography>
						We welcome your feedback about Maldives e-Government
						Portal to help you serve better.
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<ExpansionPanel
				square
				expanded={expanded === 'panel4'}
				onChange={handleChange('panel4')}>
				<ExpansionPanelSummary
					aria-controls='panel3d-content'
					id='panel3d-header'>
					<Typography color='primary'>Privacy</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Privacy />
				</ExpansionPanelDetails>
			</ExpansionPanel>

			<ExpansionPanel
				square
				expanded={expanded === 'panel5'}
				onChange={handleChange('panel5')}>
				<ExpansionPanelSummary
					aria-controls='panel3d-content'
					id='panel3d-header'>
					<Typography color='primary'>Feedback</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Feedback />
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}
