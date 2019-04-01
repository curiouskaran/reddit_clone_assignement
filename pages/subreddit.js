import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  fetchPostsIfNeeded,
  // selectSubreddit
} from '../src/store/actions/actions';

import Layout from "../src/hoc/Layout/Layout";
import SubredditHeader from "../src/components/Subreddit/SubredditHeader";
import SubredditCard from "../src/components/Subreddit/SubredditCard";
import {Component} from "react";

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
  }
});

class SubredditPage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    postList: PropTypes.array.isRequired,
    subreddit: PropTypes.string.isRequired
  };

  static defaultProps = {
    subreddit: "",
    postList: []
  };

  static getInitialProps ({ reduxStore, query }) {
    console.log("in getInitialProps");
    // reduxStore.dispatch(selectSubreddit(query.id))
    reduxStore.dispatch(fetchPostsIfNeeded(query.id));
    return {
      subreddit: query.id
    }
  }

  componentDidMount() {
    console.log("in component did mount");
    const { dispatch, subreddit } = this.props
    dispatch(fetchPostsIfNeeded(subreddit))
  }

  componentDidUpdate(prevProps) {
    if (this.props.subreddit !== prevProps.subreddit) {
      console.log("in componentDidUpdate");
      const { dispatch, subreddit } = this.props
      dispatch(fetchPostsIfNeeded(subreddit))
    }
  }

  renderContent = (posts, subreddit, classes) => {
    if(posts[subreddit].isFetching) {
      return <CircularProgress className={classes.progress} color="secondary" />
    } else if(posts[subreddit].items) {
      return posts[subreddit].items.map(post => <SubredditCard post={post} />)
    } else {
      return <h1>No content Found!!! for {subreddit}</h1>
    }
  }

  render() {
    const { classes, posts, subreddit } = this.props;
    return (
      <Layout>
        <div className={classes.layout}>
          <SubredditHeader subreddit={subreddit} />
          {/* {!posts[subreddit].isFetching ? (
            posts[subreddit].items.map(post => <SubredditCard post={post} />)
          ) : (
            <h1>No content Found!!! for {subreddit}</h1>
          )} */}
          {/* {!posts.isFetching ? (
            posts.items.map(post => <SubredditCard post={post} />)
          ) : (
            <h1>No content Found!!! for {subreddit}</h1>
          )} */}
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

// function mapStateToProps(state) {
//   const { selectedSubreddit, postsBySubreddit } = state
//   const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
//     selectedSubreddit
//   ] || {
//     isFetching: true,
//     items: []
//   }

//   return {
//     selectedSubreddit,
//     posts,
//     isFetching,
//     lastUpdated
//   }
// }

export default connect(mapStateToProps,null)(withStyles(styles)(SubredditPage));
