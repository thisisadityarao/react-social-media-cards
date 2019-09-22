import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import Header from "./components/Header";
import SectionInstagram from "./components/SectionInstagram";
import SectionTwitter from "./components/SectionTwitter";
import grey from "@material-ui/core/colors/grey";

const containerColor = grey[100];

const styles = {
  topContainer: {
    display: "block",
    minwidth: "100%",
    minheight: "100%",
    backgroundColor: containerColor
  }
};
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.topContainer}>
        <Header />
        <SectionInstagram />
        <SectionTwitter />
      </div>
    );
  }
}

export default withStyles(styles)(App);
