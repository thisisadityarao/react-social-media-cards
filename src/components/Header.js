import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const styles = {
  root: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "center"
  },
  link: {
    color: "#3B92DE",
    "&:hover": {
      color: "#2196F3",
    }
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit">
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
