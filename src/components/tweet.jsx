import React from 'react';
import PropTypes from 'prop-types'

function Tweet(props){
  return(
    <div>
      <h5>{props.user}</h5>
      <p>{props.tweetText}</p>
      <hr/>
    </div>
  );
}

Tweet.PropTypes = {
  user: PropTypes.string.isRequired,
  tweetText: PropTypes.string.isRequired
};

export default Tweet;
