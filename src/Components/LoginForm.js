import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import {useLocation, useNavigate} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {checkUser} from "../Service/LoginService";
import {BookView} from "../View/BookView";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */




function withMyHook(Component) {
    return function WrappedComponent(props) {
        const myHookValue = useNavigate();
        const [messageApi, contextHolder] = message.useMessage();
        return <Component {...props} myHookValue={myHookValue} myHookValue2={messageApi} myHookValue3={contextHolder} />;
    }
}

export class LoginForm extends React.Component {
    con = this.props.myHookValue3;
    constructor(props) {
        super(props);
        this.state = {};
    }
    UseFinish = (event) => {
        let navigate = this.props.myHookValue;

        let data =
            {
                username: event.username,
                password: event.password
            };
        const callback = (data) => {
            this.setState({user: data}, ()=>{
                if (this.state.user != null && this.state.user.ability === 1) {
                    window.localStorage.setItem("user", JSON.stringify(this.state.user));
                    navigate("/home", {replace: true})
                }
                else if (this.state.user.ability === 0)
                {
                    this.props.myHookValue2.info("you are banned!hahaha");
                }
                else
                {
                    this.props.myHookValue2.info("wrong password or account");
                }
            });
        }
        checkUser(data, callback);
    }

    render() {
        return (
            <>
                {this.con}
            <Form className="login-form" onFinish={this.UseFinish}>
                <Form.Item name="username" rules={[{required: true, message: 'Please input your username!'}]}>
                    {
                        <Input
                            type="username"
                            placeholder="Username"
                        />
                    }
                </Form.Item>
                <Form.Item name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
                    <Input
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="/reg">register now!</a>
                </Form.Item>
            </Form>
                </>
        );
    }
}

LoginForm = withMyHook(LoginForm);