import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Twitter from "./Twitter";
import Typography from "@material-ui/core/Typography";
import React from "react";
import lightBlue from "@material-ui/core/colors/lightBlue";
import grey from "@material-ui/core/colors/grey";

const containerBackground = lightBlue['A500'];
const text = grey[900];

const styles = {
  mainContainer: {
    width: "100vw",
    height: "50vh",
    backgroundColor: containerBackground
  },
  mainItem: {
    maxWidth: "900px",
    margin: "0 auto",
    marginTop: "4rem"
  },
  innerContainer: {
    "@media (min-width: 600px)": {
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-between"
    }
  },
  twitter: {
    "& > h1": {
      color: text,
      borderBottom: `3px solid ${text}`
    },
    marginBottom: "24px",
    "@media (min-width: 900px)": {
      marginBottom: "0px",
      paddingTop: "0px",
      paddingBottom: "0px"
    }
  }
};

function SectionTwitter(props) {
  const { classes } = props;
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item xs={12} md={8} className={classes.mainItem}>
        <Grid
          container
          direction="column"
          alignItems="flex-start"
          alignContent="space-between"
          className={classes.innerContainer}
        >
          <Grid item className={classes.twitter}>
            <Typography variant="h2" gutterBottom inline>
              Twitter
            </Typography>
          </Grid>
          <Grid item className={classes.twitter}>
            <Twitter />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SectionTwitter);
