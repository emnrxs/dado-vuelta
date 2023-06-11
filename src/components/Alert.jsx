import { useState } from "react";
import './Alert.css'
import aboutLogo from '../assets/about.svg'

const Alert = ({warning}) => {
    return (
        <div className="alert-card">
            <img src={aboutLogo} alt="" className="alert-title"/>
            <p className="alert-text">{warning}</p>
        </div>
    )
}

export default Alert
