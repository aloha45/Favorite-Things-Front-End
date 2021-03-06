import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" class="nav">
              <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
              <li><a href="/users" className="nav-link">Users</a></li>
              <li><a href="/lists" className="nav-link">Favorite's List</a></li>
              <li><a href="/add" className="nav-link">Add a List</a></li>
              <Link to='' className='NavBar-link' onClick={handleLogout} >LOG OUT</Link>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><a href="/login" className="nav-link">Log In</a></li>
              <li><a href="/signup" className="nav-link">Sign Up</a></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}
export default NavBar;