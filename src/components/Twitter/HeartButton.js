import React from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

const primary = red[500];

const styles = {
  icon: {
    marginRight: "35px"
  },
  number: {
    marginLeft: "4px"
  },
  optional: {
    color: primary
  }
};

function HeartButton(props) {
  const { classes } = props;
  const [like, setLike] = React.useState(false);
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
      setLike(!like);
      switch (count) {
        case 0:
          setCount(1);
          break;
        case 1:
          setCount(0);
          break;
      }
    };

  return (
    <>
      <IconButton
        disableFocusRipple
        disableRipple
        color="inherit"
        className={classes.icon}
        onClick={handleClick}
      >
        {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        {like ? (
          <Typography className={`${classes.number} ${classes.optional}`}>
            {count}
          </Typography>
        ) : ( <Typography className={classes.number}>{count}</Typography> ) }
      </IconButton>
    </>
  );
}
export default withStyles(styles)(HeartButton);
