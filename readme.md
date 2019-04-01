Author:-Karan Sharma
############# Prerequisite #############
node and npm.
############# How to run ###############
step1:- git clone https://github.com/curiouskaran/reddit_clone_assignement.git
step2:- cd .\reddit_clone_assignement\
step3:- npm install
step4:- npm run dev
step5:- go to chrome and open http://localhost:3000

############# How to test ##############
-->On the landing page, when you click on Title or subreddit name it will navigate to the subreddit.
  when you click on image, it will open the server side hosted image. Now Click browser back
  to return back to the home page.
-->When landed on a subreddit you can click on the image or gif to go the source of that
  image. For going back either click on browser back or reddit logo to navigate to home page.

Note:-When you navigate between the subreddits, data will persist in the redux store. To open any subreddit
use this URL pattern - http://localhost:3000/r/{subreddit}