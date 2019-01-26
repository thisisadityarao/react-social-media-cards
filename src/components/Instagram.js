import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {
  Heart,
  Share,
  MessageCircle,
  Bookmark,
  ChevronDown
} from "react-feather";

const styles = {
  card: {
    maxWidth: "614px"
  },
  media: {
    height: "400px"
  },
  bookmark: {
    marginLeft: "auto"
  },
  actions: {
    paddingLeft: "8px",
    paddingRight: "8px"
  },
  names: {
    display: "inline",
    fontWeight: "500"
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
  hr: {
    borderColor: "#fff",
    marginTop: "24px"
  },
  expand: {
    marginLeft: "280px"
  }
};

class Instagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: "",
      photos: ""
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get(`https://jsonplaceholder.typicode.com/users/1`),
        axios.get(`https://jsonplaceholder.typicode.com/photos/6`)
      ])
      .then(
        axios.spread((usersRes, photosRes) => {
          // Both requests are now complete
          console.log(usersRes);
          const users = usersRes.data;
          const photos = photosRes.data;
          this.setState({ users: users, photos: photos });
        })
      );
  }

  render() {
    const { classes } = this.props;
    const { users, photos } = this.state;
    console.log(users);
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Profile Photo" src={photos.thumbnailUrl} />
          }
          title={users.name}
          subheader={users.website}
        />
        <CardMedia className={classes.media} image={photos.url} />
        <CardActions className={classes.actions}>
          <Heart />
          <MessageCircle />
          <Share />
          <Bookmark className={classes.bookmark} />
        </CardActions>
        <CardContent>
          <Typography variant="inherit" gutterBottom className={classes.likes}>
            31 likes
          </Typography>
          <Typography variant="subtitle1" className={classes.names}>
            {users.name}
          </Typography>
          <Typography
            variant="body1"
            className={classes.paragraph}
            gutterBottom
          >
            Saying goodbye is never easy...but essential, for it creates space
            for newer experiences
          </Typography>
          <hr className={classes.hr} />
          <Typography variant="body1" className={classes.comment}>
            Add a comment...
          </Typography>
          <ChevronDown className={classes.expand} />
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Instagram);
