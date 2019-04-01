import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import fetch from "isomorphic-fetch";

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
  }
});

const subredditPage = ({ classes, postList, subreddit }) => {
  return (
    <Layout>
      <div className={classes.layout}>
        <SubredditHeader subreddit={subreddit} />
        {postList.length ? (
          postList.map(post => <SubredditCard post={post} />)
        ) : (
          <h1>No content Found!!! for {subreddit}</h1>
        )}
      </div>
    </Layout>
  );
};

subredditPage.getInitialProps = async context => {
  const response = await fetch(
    `https://www.reddit.com/r/${context.query.id}.json`
  );

  if (response.ok) {
    const postList = await response.json();
    console.log("post", postList);
    return {
      postList: postList.data.children,
      subreddit: context.query.id
    };
  }

  return {
    postList: [],
    subreddit: context.query.id
  };
};

subredditPage.propTypes = {
  classes: PropTypes.object.isRequired,
  postList: PropTypes.array.isRequired,
  subreddit: PropTypes.string.isRequired
};

subredditPage.defaultProps = {
  subreddit: "",
  postList: [
    {
      data: {
        author: "assas uug",
        title: "assasa",
        subreddit: "dsdsd",
        url: "/static/sample1.png"
      }
    }
  ]
};

export default withStyles(styles)(subredditPage);
