import React, {useEffect, useState} from "react";
import "./loginform.css"
import {Link} from "react-router-dom";
import axios from "axios"
  
const LoginForm = () => {

    return (
        <div className="container" >
            <div className="cover">

                <h1>Login</h1>
                
                <input type="text" required placeholder="username" />

                <input type="password" required placeholder="password"  />

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