import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";

const appBar = blue[900];
const text = grey[50];
const linkHover = blue[300];

const styles = {
  root: {
    flexGrow: 1,
    zIndex: "99",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
    backgroundColor: appBar
  },
  toolbar: {
    display: "flex",
    justifyContent: "center"
  },
  link: {
    color: text,
    "&:hover": {
      color: linkHover
    }
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="relative" classes={{ root: classes.root }}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h1" color="inherit">
            <Link href={"/"} underline="none" className={classes.link}>
              Social Media Cards
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
