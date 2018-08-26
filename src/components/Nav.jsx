import React from 'react';

function Nav(){
  return (
    <div>
      <ul className='nav'>
        <li className='nav-item'>
          <a className='nav-link'>Home</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link'>Notifications</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link'>Messages</a>
        </li>
      </ul>
      <input type='text' name='name' placeholder='Search' />
      <button  className='btn btn-success'type='button'>Tweet</button>
    </div>
  );
}

export default Nav;
