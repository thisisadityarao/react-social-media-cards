import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ShareButton from "./ShareButton";
import HeartButton from "./HeartButton";
import CommentButton from "./CommentButton";
import RetweetButton from "./RetweetButton";
import ResponsiveDialog from "./ResponsiveDailog";
import axios from "axios";
import grey from "@material-ui/core/colors/grey";
const text = grey[600];

const styles = {
  card: {
    maxWidth: "598px",
    margin: "0 auto"
  },
  header: {
    paddingBottom: "0"
  },
  content: {
    paddingTop: "0",
    paddingLeft: "70px"
  },
  actions: {
    paddingTop: "0",
    paddingLeft: "70px",
    display: "flex",
  },
  region: {
    marginLeft: "6px",
    marginRight: "6px",
    color: text
  },
  names: {
    display: "inline",
    fontWeight: "700"
  },
  paragraph: {
    display: "inline"
  },
  icons: {
    flex: "1",
    marginRight: "10px"
  }
};

class Twitter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: "",
      photos: ""
    };
  }

  componentDidMount() {
    axios.get(`https://uinames.com/api/?ext`).then(usersRes => {
      // Both requests are now complete
      console.log(usersRes);
      const users = usersRes.data;
      this.setState({ users: users });
    });

    this.date = new Date();
    this.result = this.date.getHours();

  }

  render() {
    const { classes } = this.props;
    const { users } = this.state;
    console.log(users);
    return (
      <Card className={classes.card} raised>
        <CardHeader
          className={classes.header}
          disableTypography
          avatar={<Avatar aria-label="Profile Photo" src={users.photo} />}
          title={
            <Typography
              className={classes.names}
              variant="subtitle1"
              display="inline"
            >
              {users.name}
            </Typography>
          }
          subheader={
            <Typography
              className={classes.region}
              variant="subtitle1"
              display="inline"
            >
              @{users.region}
              <span className={classes.region}>&#183;</span>
              {this.result}h
            </Typography>
          }
          action={
            <IconButton aria-label="settings" disableRipple disableTouchRipple>
              <ResponsiveDialog />
            </IconButton>
          }
        />
        <CardContent className={classes.content}>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.paragraph}
          >
            Saying goodbye is never easy...but essential, for it creates space
            for newer experiences
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <CommentButton className={classes.icons} />
          <RetweetButton className={classes.icons} />
          <HeartButton className={classes.icons} />
          <ShareButton className={classes.icons} />
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Twitter);
