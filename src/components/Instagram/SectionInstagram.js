import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Instagram from "./Instagram";
import grey from "@material-ui/core/colors/grey";

const text = grey[900];
const containerBackground = grey[50];

const styles = {
  mainContainer: {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    backgroundColor: containerBackground
  },
  mainItem: {
    maxWidth: "900px",
    margin: "0 auto",
    marginTop: "3rem"
  },
  innerContainer: {
    "@media (min-width: 600px)": {
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-between"
    }
  },
  instagram: {
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

function SectionInstagram(props) {
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
          <Grid item className={classes.instagram}>
            <Typography variant="h2" gutterBottom inline>
              Instagram
            </Typography>
          </Grid>
          <Grid item className={classes.instagram}>
            <Instagram />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SectionInstagram);
