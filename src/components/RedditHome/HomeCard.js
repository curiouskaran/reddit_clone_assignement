import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "next/link";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ModeComment from "@material-ui/icons/ModeComment";
import Share from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  card: {
    maxWidth: 800
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  click: {
    textDecoration: "none"
  }
});

const homeCard = ({ post, classes, index }) => (
  <Grid item key={post.id} xs={12} md={8}>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="user-avatar" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <Typography
            variant="caption"
            color="default"
            style={{
              display: "flex",
              flexDirection: "column"
            }}
          >
            <ArrowUpward className={classes.voteIcon} />
            {post.views}
            <ArrowDownward className={classes.voteIcon} />
          </Typography>
        }
        title={
          <Link
            href={`/subreddit?id=${post.subReddit.split("/")[1]}`}
            as={`/${post.subReddit}`}
          >
            <a className={classes.click}>
              <Typography variant="caption" color="default">
                {`${post.subReddit} • Posted by ${post.postedBy} ${post.date}`}
              </Typography>
            </a>
          </Link>
        }
      />
      <CardContent>
        <Link
          href={`/subreddit?id=${post.subReddit.split("/")[1]}`}
          as={`/${post.subReddit}`}
        >
          <a className={classes.click}>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
          </a>
        </Link>
      </CardContent>
      <Link href={`static/sample${index + 1}.jpg`}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image={`static/sample${index + 1}.jpg`}
            title={`sample${index + 1}`}
          />
        </CardActionArea>
      </Link>
      <CardActions>
        <IconButton>
          <ModeComment className={classes.commentIcon} />
        </IconButton>
        <Typography component="caption" variant="h5">
          {2} comments
        </Typography>
        <IconButton>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  </Grid>
);

homeCard.propType = {
  post: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default withStyles(styles)(homeCard);
