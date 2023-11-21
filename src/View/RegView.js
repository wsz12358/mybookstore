import React from "react";
import {Layout} from "antd";
import "../ccs/loginview.css"
import {RegForm} from "../Components/RegForm";
import {BrowserRouter as Router} from "react-router-dom";

const {Header} = Layout;
export class RegView extends React.Component{
    render()
    {
        return <div className="login-page">
            <div className="login-container">
                <div className="login-box">
                    <h1 className="page-title">Register</h1>
                    <div className="login-content">
                        <RegForm />
                    </div>
                </div>
            </div>
        </div>

    }
}