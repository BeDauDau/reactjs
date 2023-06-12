import React, {useEffect, useState} from "react";
import Popup from 'reactjs-popup';
import "./loginform.css"
import { Outlet, Link, Route, Routes } from "react-router-dom";

  
const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="container" >
            <div className="cover">

                <h1>Login</h1>
                
                <input type="text" required placeholder="username" />

                <input type="password" required placeholder="password" />

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

                <div className={popupStyle}>
                    <h3 >Login Failed</h3>
                    <p>Username or password incorrect</p>
                </div>
            </div>
        </div>
            
    )
}

export default LoginForm