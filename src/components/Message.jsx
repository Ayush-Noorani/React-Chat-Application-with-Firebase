import React from 'react'
import Profile_photo from '../images/pexels-photo-13461809.jpeg';

export const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Profile_photo} alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello, How are you?</p>
        <img src={Profile_photo} alt=''></img>
      </div>
    </div>
  )
}

export default Message