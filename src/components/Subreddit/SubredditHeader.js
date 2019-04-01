import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const styles = theme => ({
  toolbarMain: {
    paddingBottom: theme.spacing.unit * 3
  },
  toolbarTitle: {
    flex: 1
  }
});

const subredditHeader = ({ classes, subreddit }) => (
  <Toolbar className={classes.toolbarMain}>
    <Typography
      component="h3"
      variant="h3"
      color="inherit"
      align="center"
      noWrap
      className={classes.toolbarTitle}
    >
      {subreddit}
    </Typography>
  </Toolbar>
);

subredditHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  subreddit: PropTypes.string.isRequired
};

export default withStyles(styles)(subredditHeader);
