import React from "react";
import {Layout} from "antd";
import "../ccs/loginview.css"
import {LoginForm} from "../Components/LoginForm";
import {BrowserRouter as Router} from "react-router-dom";

const {Header} = Layout;
export class LoginView extends React.Component{
    render()
    {
        return <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <h1 className="page-title">Login</h1>
                        <div className="login-content">
                                <LoginForm />
                        </div>
                    </div>
                </div>
            </div>

    }
}