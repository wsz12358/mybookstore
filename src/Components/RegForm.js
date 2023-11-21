import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import {useLocation, useNavigate} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {addUser, checkUser} from "../Service/LoginService";
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

export class RegForm extends React.Component {
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
                password: event.password,
                email: event.email
            };

        const callback = (data) => {

            if (data == null) {
                this.props.myHookValue2.info("already registered name!");
            }
            else {
                this.setState({user: data}, () => {
                    navigate("/", {replace: true})
                });
            }
        }
        addUser(data, callback);
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
                    <Form.Item name="repeat password" rules={[({getFieldValue})=>({
                        validator(rule,value){
                            if(!value || getFieldValue('password') === value){
                                return Promise.resolve()
                            }
                            return Promise.reject("两次密码输入不一致")
                        }
                    })]}>
                        <Input
                            type="password"
                            placeholder="repeat Password"
                        />
                    </Form.Item>
                    <Form.Item name="email" rules={[{pattern: /\w[-.\w]*\@[-a-z0-9]+(.[-a-z0-9]+)*\.(com|cn|edu|uk)/ig, required: true, message: "not valid email"}]}>
                        <Input
                            type="email"
                            placeholder="email"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="reg-form-button">
                            Register Now!
                        </Button>
                    </Form.Item>
                </Form>
            </>
        );
    }
}

RegForm = withMyHook(RegForm);