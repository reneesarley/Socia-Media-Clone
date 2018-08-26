import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import Newsfeed from './Newsfeed';

function App(){
  return (
    <div className='container'>
      <Nav/>
      <div className='row'>
        <Profile/>
        <Newsfeed/>
      </div>
    </div>
  );
}

export default App;
