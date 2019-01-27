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
    backgroundColor: "#F9A800"
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
