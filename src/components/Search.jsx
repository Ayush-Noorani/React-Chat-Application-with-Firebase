import React from 'react'
import Profile_photo from '../images/pexels-photo-13461809.jpeg';


export const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Find a chat'/>
        </div>
        <div className="userChat">
            <img src={Profile_photo} alt=''></img>
            <div className="userChatInfo">
                <span>Ayush Noornai</span>
            </div>
        </div>
    </div>
  )

  
}

export default Search