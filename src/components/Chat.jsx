import React from 'react'
import Messages from './Messages';
import Input from './Input';

export const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Sayant Vetri</span>
        <div className='chatIcons'>
          <button>Video Call</button>
          <button>Add Friend</button>
          <button>More</button>
        </div>
      </div>
        <Messages />
        <Input />      
    </div>
  )
}

export default Chat