import React from 'react'
import Profile_photo from '../images/pexels-photo-13461809.jpeg';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Ayush Chat</span>
        <div className='user'>
            <img src={Profile_photo} alt=''></img>
            <span>User Name</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar