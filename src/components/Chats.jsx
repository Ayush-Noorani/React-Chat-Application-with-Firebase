import React from 'react'
import Profile_photo from '../images/pexels-photo-13461809.jpeg';


export const Chats = () => {
  return (
    <div className='chats'>
        <div className="userChat">
            <img src={Profile_photo} alt=''></img>
            <div className="userChatInfo">
                <span>Ayush Noornai</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="userChat">
            <img src={Profile_photo} alt=''></img>
            <div className="userChatInfo">
                <span>Ayush Noornai</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="userChat">
            <img src={Profile_photo} alt=''></img>
            <div className="userChatInfo">
                <span>Ayush Noornai</span>
                <p>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default Chats