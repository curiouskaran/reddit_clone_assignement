import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchPostsIfNeeded } from "../src/store/actions/actions";
import Layout from "../src/hoc/Layout/Layout";
import Subreddit from "../src/components/Subreddit/Subreddit";

class SubredditPage extends Component {
  static propTypes = {
    posts: PropTypes.object.isRequired,
    subreddit: PropTypes.string.isRequired
  };

  static defaultProps = {
    subreddit: "",
    posts: {}
  };

  static getInitialProps({ reduxStore, query }) {
    reduxStore.dispatch(fetchPostsIfNeeded(query.id));
    return {
      subreddit: query.id
    };
  }

  componentDidMount() {
    const { dispatch, subreddit } = this.props;
    dispatch(fetchPostsIfNeeded(subreddit));
  }

  render() {
    const { posts, subreddit } = this.props;
    return (
      <Layout>
        <Subreddit posts={posts} subreddit={subreddit} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(
  mapStateToProps,
  null
)(SubredditPage);
