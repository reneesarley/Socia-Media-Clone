import React from 'react';
import Tweet from './tweet';

var masterTweetList =[
  {
    user: 'Joe Smith',
    tweetText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    user: 'Samatha Brown',
    tweetText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    user: 'Amy Jones',
    tweetText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    user: 'Jill Smith',
    tweetText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    user: 'Bob Johnson',
    tweetText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  }
];

function TweetList(){
  return(
    <div>
      {masterTweetList.map((tweet, index) =>
        <Tweet user={tweet.user}
          tweetText={tweet.tweetText}
          key={index}/>
      )}
    </div>

  );
}

export default TweetList;
