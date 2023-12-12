import React from 'react';
import './login.css';


function Login() {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleChangeUsername = (value) => {
        setUsername(value.target.value)
    }

    const handleChangePassword = (value) => {
        setPassword(value.target.value)
    }

  return (
    <main className='container'>
        <h2>Login</h2>
        <form>
            <div className='input-field'>
                <input type='text'  name='username' id='username' placeholder='Enter your username' value={username} onChange={handleChangeUsername}></input>
                <div className='underline'></div>
            </div>
            
            <div className='input-field'>
                <input type='password' name='password' id='password' placeholder='Enter your password' value={password} onChange={handleChangePassword} ></input>
                <div className='underline'></div>
            </div>

            <input type='submit' value='Continue'></input>
        </form>

        <div className='footer'>
            <span>Do not have an account? <a href="google.com">Sign up.</a></span>
        </div>
    </main>
  );
}

export default Login;
