import React, {useEffect, useState} from "react";
import Popup from 'reactjs-popup';
import { Outlet, Link, Route, Routes } from "react-router-dom";
import "./registerform.css"

const ForgotForm = () => {


    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="page">
            <div className="cover">

                <h1>forgot password</h1>
                {/* */}
                <input type="text" required placeholder="username" />

                <input type="password" required placeholder="password" />

                <input type="password" required placeholder="Confirm Password" />

                {/*Login Button */}

                <div className="login-btn" >Reset</div>

                <Link to="/" className="login-btn">exit</Link>
                
            </div>
            <Outlet />
        </div>
    )
}

export default ForgotForm