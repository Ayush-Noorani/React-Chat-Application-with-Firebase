import React from 'react';

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Ayush Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type='email' className='formInput' placeholder='Email'></input>
                <input type='password' className='formInput' placeholder='Password'></input>
                <button>Login</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login