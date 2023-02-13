import React from "react";
import Signupform from "./signup";
import Signinform from "./Signinfrom";
import './authentication.scss';

const Signin = () => {

    return (
        <div className="authentication-container">

            <Signinform/>
            <Signupform/>
        </div>
    )
}
export default Signin;