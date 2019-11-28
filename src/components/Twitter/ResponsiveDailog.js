import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SentimentDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentDissatisfiedOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import VolumeOffOutlinedIcon from "@material-ui/icons/VolumeOffOutlined";
import BlockOutlinedIcon from "@material-ui/icons/BlockOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";


const styles = theme => ({
  list: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  listItem: {
    textAlign: "center"
  }
});

function ResponsiveDialog(props) {
  const { classes } = props;

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <ExpandMoreIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <List className={classes.list}>
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemIcon disableRipple>
                <SentimentDissatisfiedOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Show less often" />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemIcon disableRipple>
                <CodeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Embed tweet" />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemIcon disableRipple>
                <PersonAddOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Follow @User" />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemIcon disableRipple>
                <VolumeOffOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Mute @User" />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemIcon disableRipple>
                <BlockOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Block @User" />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemIcon disableRipple>
                <FlagOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Report Tweet" />
            </ListItem>{" "}
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withStyles(styles)(ResponsiveDialog);