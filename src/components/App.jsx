import React from 'react';
import Nav from './Nav';
import Profile from './Profile'

function App(){
  return (
    <div className='container'>
      <Nav/>
      <div className='row'>
        <Profile/>
      </div>
    </div>
  );
}

export default App;
