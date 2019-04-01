import {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  fetchPostsIfNeeded,
} from '../src/store/actions/actions';
import Layout from "../src/hoc/Layout/Layout";
import SubredditHeader from "../src/components/Subreddit/SubredditHeader";
import SubredditCard from "../src/components/Subreddit/SubredditCard";


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
  errorMessage:{
    textAlign:"center"
  }
});

class SubredditPage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    posts: PropTypes.object.isRequired,
    subreddit: PropTypes.string.isRequired
  };

  static defaultProps = {
    subreddit: "",
    posts: []
  };

  static getInitialProps ({ reduxStore, query }) {
    reduxStore.dispatch(fetchPostsIfNeeded(query.id));
    return {
      subreddit: query.id
    }
  }

  componentDidMount() {
    const { dispatch, subreddit } = this.props
    dispatch(fetchPostsIfNeeded(subreddit))
  }

  renderContent = (posts, subreddit, classes) => {
    if(posts[subreddit].isFetching) {
      return <CircularProgress className={classes.progress} color="secondary" />
    } else if(posts[subreddit].items.length) {
      return posts[subreddit].items.map(post => <SubredditCard post={post} />)
    } else {
      return <h1 className={classes.errorMessage}>No content Found!!! for {subreddit}</h1>
    }
  }

  render() {
    const { classes, posts, subreddit } = this.props;
    return (
      <Layout>
        <div className={classes.layout}>
          <SubredditHeader subreddit={subreddit} />
          {this.renderContent(posts, subreddit, classes)}
        </div>
      </Layout>
    );
  };
}
  
const mapStateToProps = (state) => {
  return {
    posts: state
  }
}

export default connect(mapStateToProps,null)(withStyles(styles)(SubredditPage));
