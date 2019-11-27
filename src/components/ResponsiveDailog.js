import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import {
  MoreHorizontal
} from "react-feather";

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
        <MoreHorizontal />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <List className={classes.list}>
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemText primary="Report Inappropriate" />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemText primary="Unfollow" />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemText primary="Go to post" />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemText primary="Embed" />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemText primary="Share" />
            </ListItem>
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemText primary="Copy link" />
            </ListItem>{" "}
            <Divider />
            <ListItem button className={classes.listItem} onClick={handleClose}>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default withStyles(styles)(ResponsiveDialog);