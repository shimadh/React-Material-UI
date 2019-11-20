import  React  from 'react';
import { Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Appbar from './Appbar';
import Drawer from "./Drawer";
//Pages
import Landing from '../Pages/Landing';
import Users from "../Pages/Users";
import Roles from "../Pages/Roles";
import Login from "../Pages/Login";

const App = (props) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const useStyles = makeStyles(theme => ({
        content: {
          flexGrow: 1,
          padding: theme.spacing(5),
        },
        toolbar: theme.mixins.toolbar,
        wrapper:{
          display: 'flex',
          flexDirection: 'row'
        },
        
      }));

      const classes = useStyles();

      const handleLogout = () => {
          setIsLoggedIn(false);
      }

    return ( 
    <div className="App">
      <Appbar isLoggedIn={isLoggedIn} title={"GEMS:2.0"} />
      <div className={classes.wrapper}>
        {isLoggedIn && <Drawer logOut={handleLogout}/> }
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Switch>
            {!isLoggedIn && <Route path="/"    exact component={Landing} />}
            {!isLoggedIn && <Route path="/login"       exact component={Login} />}
            <Route path="/users"       exact component={Users} />
            <Route path="/roles"       exact component={Roles} />
        </Switch>
        </main>
      </div>
    </div>        
        
    );
}
 
export default App;