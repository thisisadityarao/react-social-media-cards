import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  mainContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    marginTop: "3rem"
  },
};

function Main(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={32}>
        <Grid item xs={11} md={6} className={classes.mainContainer}>
          <Typography variant="headline">
            Instagram
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Main);
