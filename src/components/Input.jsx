import React from 'react'

export const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' ></input>
      <div className='send'>
        <input type='file' id='attachment' style={{display: "none"}}></input>
        <label htmlFor='attachment'>
          <img src='' alt=''></img>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input