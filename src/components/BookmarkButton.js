import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@material-ui/icons/BookmarkRounded";
const styles = {
  bookmark: {
    marginLeft: "auto!important",
  }
};


function BookmarkButton(props) {
  const {classes} = props;
  const [bookmark, setBookmark] = React.useState(false);

  return (
    <>
      <IconButton
        disableFocusRipple
        disableRipple
        size="small"
        color="inherit"
        className={classes.bookmark}
        onClick={() => setBookmark(!bookmark)}
      >
        {bookmark ? <BookmarkRoundedIcon /> : <BookmarkBorderRoundedIcon />}
      </IconButton>
    </>
  );
}
export default withStyles(styles)(BookmarkButton);
