import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import HomeCard from './HomeCard';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  }
});

const redditHome = ({ classes, posts }) => (
  <div className={classes.layout}>
      <Grid container spacing={40}>
        {posts.map((post, index) => (
          <HomeCard
            post={post}
            index={index}
          />
        ))}
      </Grid>
  </div>
);

redditHome.prototype = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired
};

export default  withStyles(styles)(redditHome);
