import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const styles = theme => ({
  root: {
    width: '100%',
  },
  logoStyle: {
    height: '50px'
  }
});

const header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
        <Toolbar>
          <Link href="/">
          <Typography variant="h6" color="inherit">
            <img src="/static/reddit.png" className={classes.logoStyle} alt="reddit"></img>
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
  </div>
);

header.prototype = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(header);