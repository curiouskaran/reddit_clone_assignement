import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Avatar from "@material-ui/core/Avatar";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ModeComment from "@material-ui/icons/ModeComment";
import Share from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import { isImage } from "../../utils/utils";

const styles = theme => ({
  card: {
    marginBottom: theme.spacing.unit * 3,
    maxWidth: 800,
    width: "100%"
  },
  cardDetails: {},
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    maxWidth: "100%",
    maxHeight: "100%"
  },
  cardClick: {
    textDecoration: "none"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  voteIcon: {
    height: 20,
    width: 20
  },
  commentIcon: {
    height: 20,
    width: 20
  }
});

const subredditCard = ({ classes, post }) => {
  // console.log("post", post);
  return (
    <main key={post.data.id}>
      {Object.keys(post).length && post.data.selftext === "" && (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="user-avatar" className={classes.avatar}>
                {post.data.author.charAt(0).toUpperCase()}
              </Avatar>
            }
            title={
              <Typography variant="caption" color="default">
                {`${post.data.subreddit} • Posted by u/${post.data.author}`}
              </Typography>
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
                {post.data.ups}
                <ArrowDownward className={classes.voteIcon} />
              </Typography>
            }
          />
          <CardActionArea>
            <a
              href={
                !post.data.is_video
                  ? post.data.url
                  : post.data.media.reddit_video.fallback_url
              }
              className={classes.cardClick}
            >
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {post.data.title}
                </Typography>
              </CardContent>

              <CardMedia
                className={classes.cardMedia}
                image={
                  isImage(post.data.url) ? post.data.url : post.data.thumbnail
                }
                title={post.data.title}
              />
            </a>
          </CardActionArea>
          <CardActions>
            <IconButton>
              <ModeComment className={classes.commentIcon} />
            </IconButton>
            <Typography component="caption" variant="h5">
              {post.data.num_comments} comments
            </Typography>
            <IconButton>
              <Share />
            </IconButton>
          </CardActions>
        </Card>
        // </div>
      )}
    </main>
  );
};

subredditCard.propType = {
  classes: PropTypes.object.isRequired,
  postList: PropTypes.array.isRequired
};

export default withStyles(styles)(subredditCard);
