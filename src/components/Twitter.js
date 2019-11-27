import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ResponsiveDialog from "./ResponsiveDailog";
import ShareButton from "./ShareButton";
import BookmarkButton from "./BookmarkButton";
import HeartButton from "./HeartButton";

import axios from "axios";
import { MessageCircle } from "react-feather";

const styles = {
  card: {
    maxWidth: "614px",
    margin: "0 auto"
  },
  content: {
    paddingTop: "0"
  },
  media: {
    height: "400px"
  },
  bookmark: {
    marginLeft: "auto!important",
    cursor: "pointer"
  },
  pointer: {
    cursor: "pointer"
  },
  actions: {
    paddingTop: "16px",
    paddingLeft: "16px",
    paddingRight: "16px"
  },
  names: {
    display: "inline",
    fontWeight: "700"
  },
  likes: {
    fontWeight: "700"
  },
  dividerFullWidth: {
    margin: `16px -16px 16px -16px`
  },
  paragraph: {
    display: "inline",
    marginLeft: "8px"
  },
  comment: {
    display: "inline-block",
    marginLeft: "8px",
    marginTop: "16px",
    color: "#999"
  },
  expand: {
    marginLeft: "auto",
    marginTop: "2px"
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
  }

  render() {
    const { classes } = this.props;
    const { users } = this.state;
    console.log(users);
    return (
      <Card className={classes.card} raised>
        <CardHeader
          avatar={<Avatar aria-label="Profile Photo" src={users.photo} />}
          title={users.name}
          subheader={users.region}
          action={<ResponsiveDialog />}
        />
        <CardMedia className={classes.media} image={users.photo} />
        <CardActions className={classes.actions}>
          <HeartButton className={classes.pointer} />
          <MessageCircle className={classes.pointer} />
          <ShareButton className={classes.pointer} />
          <BookmarkButton className={classes.bookmark} />
        </CardActions>
        <CardContent className={classes.content}>
          <Typography variant="body1" gutterBottom className={classes.likes}>
            3,516 likes
          </Typography>
          <Typography variant="body1" className={classes.names}>
            {users.name}
          </Typography>
          <Typography
            variant="body1"
            className={classes.paragraph}
            gutterBottom
          >
            Saying goodbye is never easy...but essential, for it creates space
            for newer experiences...{" "}
            <Typography variant="body1" color="textSecondary" display="inline">
              more
            </Typography>
          </Typography>
          <Divider className={classes.dividerFullWidth} />
          <InputBase
            placeholder="Add a comment..."
            className={classes.input}
            inputProps={{
              "aria-label": "description"
            }}
          />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Twitter);
