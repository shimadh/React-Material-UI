import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const ListItemComponent = props =>{

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <div>

      <ListItem 
        button onClick={handleClick}>
        <ListItemIcon>
          {props.listItemIcon ? props.listItemIcon: null }
        </ListItemIcon>
        <ListItemText primary={props.listItemText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            {props.subMenuItems.map(x => (
              <ListItemText primary={x.name} />
            ))}
          </ListItem>
        </List>
      </Collapse>

    </div>
  )

}

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(0),
    flexDirection: "column"
  },
}));


export default ListItemComponent;