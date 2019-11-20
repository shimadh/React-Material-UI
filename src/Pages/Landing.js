import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
      marginTop: 0,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  
const Landing = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Typography variant="h2" component="h3">
                    Landing Page
                </Typography>
                <Typography variant="h5" paragraph={true}>
                    Landing page components
                </Typography>
                </Paper>
            </Grid>
        </Grid>
        </div>
     );
}
 
export default Landing;