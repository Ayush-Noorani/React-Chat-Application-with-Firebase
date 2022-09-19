import React from 'react';

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Ayush Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' className='formInput' placeholder='Display Name'></input>
                <input type='email' className='formInput' placeholder='Email'></input>
                <input type='password' className='formInput' placeholder='Password'></input>
                <input style={{display : "none"}} type='file' className='formInput' placeholder='' id='file'></input>
                <label htmlFor='file'>
                  <img src="" alit="" ></img>
                  <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You have an account? Login </p>
        </div>
    </div>
  )
}

export default Register