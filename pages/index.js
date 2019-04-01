import Layout from '../src/hoc/Layout/Layout';
import RedditHome from '../src/components/RedditHome/RedditHome';


const posts = [
  {
    views: '167',
    subReddit: 'r/alternativeart',
    postedBy:'u/shygurrrl',
    date: 'Nov 12',
    title:'"Pokemon Trainer Akali" by W. L.',
    id:"1234"
  },
  {
    views: '918',
    subReddit: 'r/pics',
    postedBy:'u/shygurrrl',
    date: 'Nov 12',
    title:'Keeping #trashtag going in Speedway, IN',
    id:"1235"
  },
  {
    views: '186',
    subReddit: 'r/gifs',
    postedBy:'u/shygurrrl',
    date: 'Nov 12',
    title:'Night with a message.',
    id:"1237"
  },
  {
    views: '100',
    subReddit: 'r/adviceanimals',
    postedBy:'u/shygurrrl',
    date: 'Nov 12',
    title:'Keep Calm and love animals.',
    id:"1221"
  },
  {
    views: '178',
    subReddit: 'r/cats',
    postedBy:'u/shygurrrl',
    date: 'Nov 12',
    title:'Some instresting!!!',
    id:"1245"
  },
  {
    views: '1867',
    subReddit: 'r/images',
    postedBy:'u/shygurrrl',
    date: 'Nov 12',
    title:'Beautiful view of Paris😍',
    id:"1434"
  },
  {
    views: '189',
    subReddit: 'r/photoshopbattles',
    postedBy:'u/shygurrrl',
    date: 'Nov 12',
    title:'Fearless and Furious!!!',
    id:"1734"
  },
  {
    views: '156',
    subReddit: 'r/hmmm',
    postedBy:'u/shygurrrl',
    date: 'Nov 12',
    title:'what is happenong....!!!',
    id:"1934"
  },
  {
    views: '134',
    subReddit: 'r/all',
    postedBy:'u/shygurrrl',
    date: 'Nov 12',
    title:'Yoo!! you only live once.',
    id:"1544"
  },
  {
    views: '10k',
    subReddit: 'r/aww',
    postedBy:'u/shygurrrl',
    date: 'Nov 12',
    title:'I am the champion✌',
    id:"6743"
  }
];

const IndexPage = () => {
  return (
    <Layout>
      <RedditHome
        posts={posts}
      />
    </Layout>
  );
}

export default IndexPage;