import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {
  Heart,
  Share,
  MessageCircle,
  Bookmark,
  MoreHorizontal
} from "react-feather";

const styles = {
  card: {
    maxWidth: "614px",
    margin: "0 auto"
  },
  media: {
    height: "400px"
  },
  bookmark: {
    marginLeft: "auto"
  },
  actions: {
    paddingTop: "16px",
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
    marginLeft: "auto",
    marginTop: "2px"
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
        />
        <CardMedia className={classes.media} image={users.photo} />
        <CardActions className={classes.actions}>
          <Heart />
          <MessageCircle />
          <Share />
          <Bookmark className={classes.bookmark} />
        </CardActions>
        <CardContent>
          <Typography variant="inherit" gutterBottom className={classes.likes}>
            30,516 likes
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
          <Grid
            container
          >
            <Grid item>
              <Typography variant="body1" className={classes.comment}>
                Add a comment...
              </Typography>
            </Grid>
            <Grid item className={classes.expand}>
              <IconButton>
                <MoreHorizontal />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Instagram);
