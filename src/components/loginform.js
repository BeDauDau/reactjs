import React, {useEffect, useState} from "react";
import "./loginform.css"
import {Link} from "react-router-dom";
import axios from "axios"
  
const LoginForm = () => {

    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()
    
        // Handle validations
        axios
          .post("http://localhost:5000/api/v1/auth/login", { email, password })
          .then(response => {
            console.log(response)
            // Handle response
          })
      }
    
      const [email, setEmail] = useState()
      const [password, setPassword] = useState()

    return (
        <div className="container" >
            <div className="cover">

                <h1>Login</h1>
                
                <input type="text" required placeholder="username" value={email} onChange={e => setEmail(e.target.value)} />

                <input type="password" required placeholder="password" value={password}
            onChange={e => setPassword(e.target.value)} />

                {/* Forgot Link*/}
                <div className="forgot">
                    <Link to="/forgot">Forgot Password?</Link>
                </div>
                {/*Login Button */}
                    <Link className="login-btn" to="/login">Login</Link> 

                {/*Signup Link */}
                <div className="signup_link">
                    Not a member?   <Link to="/register">sign up</Link> 
                </div>
            </div>
        </div>
            
    )
}

export default LoginForm