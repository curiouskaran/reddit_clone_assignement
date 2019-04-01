import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

import SubredditHeader from "./SubredditHeader";
import SubredditCard from "./SubredditCard";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  errorMessage: {
    textAlign: "center"
  }
});

const subreddit = ({ classes, subreddit, posts }) => (
  <div className={classes.layout}>
    <SubredditHeader subreddit={subreddit} />
    {(() => {
      if (posts[subreddit].isFetching) {
        return (
          <CircularProgress className={classes.progress} color="secondary" />
        );
      } else if (posts[subreddit].items.length) {
        return posts[subreddit].items.map(post => (
          <SubredditCard post={post} key={post.id}/>
        ));
      } else {
        return (
          <h1 className={classes.errorMessage}>
            No content Found!!! for {subreddit}
          </h1>
        );
      }
    })()}
  </div>
);

export default withStyles(styles)(subreddit);
