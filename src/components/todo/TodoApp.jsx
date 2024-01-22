import React, { useState } from 'react'
import './TodoApp.css'

export default function TodoApp() {
    return (
        <div className='TodoApp'>
            Todo Management Application
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('milan')

    function handleUsernameChange(event) {
        console.log(event)
    }
    return(
        <div className='Login'>
            <div className="LoginForm">
                <div>
                    <label>User Name:</label>
                    <input type='text' name='username' value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' name='password' />
                </div>
                <div>
                    <button type="button" name='login'>login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return(
        <div className='Welcome'>
            Welcome Component
        </div>
    )
}