import Layout from "../src/hoc/Layout/Layout";
import RedditHome from "../src/components/RedditHome/RedditHome";
import { Component } from "react";
import { serverRenderedPosts } from "../src/store/actions/actions";
import { connect } from "react-redux";
import PropsTypes from "prop-types";

import posts from "../src/utils/InitialPosts";

class IndexPage extends Component {
  static getInitialProps({ reduxStore, req }) {
    reduxStore.dispatch(serverRenderedPosts(posts));
    return {};
  }

  static propsTypes = {
    posts: PropsTypes.array.isRequired
  };

  render() {
    return (
      <Layout>
        <RedditHome posts={this.props.posts} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  null
)(IndexPage);
