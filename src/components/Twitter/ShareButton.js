import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Share, Link, Mail } from "react-feather";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";


function ShareButton() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        disableFocusRipple
        disableRipple
        color="inherit"
        onClick={handleClickOpen}
      >
        <Share />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <List>
            <ListItem button onClick={handleClose}>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Share via Direct Message" />
            </ListItem>
            <Divider />
            <ListItem button onClick={handleClose}>
              <ListItemIcon>
                <BookmarkBorderRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Add Tweet to Bookmarks" />
            </ListItem>
            <Divider />
            <ListItem button onClick={handleClose}>
              <ListItemIcon>
                <Link />
              </ListItemIcon>
              <ListItemText primary="Copy link to tweet" />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
}
export default ShareButton;