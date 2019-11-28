import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { MessageCircle } from "react-feather";
import Typography from "@material-ui/core/Typography";

const styles = {
  icon: {
    marginRight: "35px"
  },
  number: {
    marginLeft: "4px"
  }
};

function CommentButton(props) {
  const { classes } = props;
  return (
    <>
      <IconButton
        disableFocusRipple
        disableRipple
        color="inherit"
        className={classes.icon}
      >
        <MessageCircle />
        <Typography className={classes.number}>{24}</Typography>
      </IconButton>
    </>
  );
}
export default withStyles(styles)(CommentButton);
