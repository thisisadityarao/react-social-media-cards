import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import Header from "./components/Header";
import SectionInstagram from "./components/Instagram/SectionInstagram";
import SectionTwitter from "./components/Twitter/SectionTwitter";
import grey from "@material-ui/core/colors/grey";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <div className={classes.topContainer}>
            <Header />
            <SectionInstagram />
            <SectionTwitter />
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
