import React from "react";
import {Layout} from "antd";
import "../ccs/login.css"

const {Header} = Layout;
export class LoginView extends React.Component{
    render()
    {
        return <div>
            <Layout>
                <Header>
                    <div>
                        header
                    </div>
                </Header>
            </Layout>
            <div>
                header
            </div>
        </div>
    }
}