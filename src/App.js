import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import Main from "./components/Main";

const styles = {
  topContainer: {
    display: "block",
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    backgroundColor: "#fff",
    backgroundImage: "linear-gradient(-135deg,#1400c8,#b900b4,#f50000)",
  }
};
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.topContainer}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default withStyles(styles)(App);
