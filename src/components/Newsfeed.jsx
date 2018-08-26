import React from 'react';
import Tweet from './tweet';
import TweetList from './TweetList'

function Newsfeed(){
  return(
    <div className='col-sm-9'>
      <input type='text' placeholder='Whats Happening?'/>
      <TweetList/>
    </div>
  );
}

export default Newsfeed;
