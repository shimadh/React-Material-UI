import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "../Layouts/Appbar";
import Drawer from "../Layouts/Drawer";
import ReactRouter from "../Pages";

const App = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      <AppBar title={"GEMS:2.0"} handleDrawerOpen={handleDrawerOpen} />
      <div className={classes.wrapper}>
        <Drawer />
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {/* <ReactRouter></ReactRouter> */}
        </main>
      </div>
    </div>
  );

};

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  toolbar: theme.mixins.toolbar,
  wrapper:{
    display: 'flex',
    flexDirection: 'row'
  }
}));

export default App;
