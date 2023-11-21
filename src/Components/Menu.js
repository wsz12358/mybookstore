import {Button, Menu} from "antd";
import React from "react";
import {useNavigate} from "react-router-dom";
import {postRequest_v2} from "../utils/ajax";
import {Logout} from "../Service/LoginService";

const {SubMenu} = Menu;
const items1 = [
    {
        label: "Books",
        key: "/home",
    },
    {
        label: "My Carts",
        key: "/cart",
    },
    {
        label: "My Orders",
        key: "/order",
    },
    {
        label: "Me",
        key: "/me",
    },
    {
        label: "Admin",
        key: "/admin",
    },
    {
        label: "Stats",
        key:"/stats/book"
    }
]
const items2 = [
    {
        label: "Books",
        key: "/home",
    },
    {
        label: "My Carts",
        key: "/cart",
    },
    {
        label: "My Orders",
        key: "/order",
    },
    {
        label: "Me",
        key: "/me",
    },
    {
        label: "Stats",
        key:"/stats"
    }
]



const UseMenu = () =>
{

    const user = JSON.parse(window.localStorage.getItem("user"));

    const navigate = useNavigate()

    const onClick = (e) => {
        navigate(e.key, {replace: true})
    }

    const logout = (e) => {
        const callback = (data) =>
        {
            console.log(data);
        };
        Logout({}, callback);
        navigate("/", {replace: true})

    }

    if (user.userType == 1) {
        return (
            <div>
            <Menu defaultSelectedKeys={['1']} mode="inline" items={items1} onClick={onClick}>
                <Menu.Item key="1">
                        <span>
                            Books
                        </span>
                </Menu.Item>
                <Menu.Item key="2">
                        <span>
                            My Carts
                        </span>
                </Menu.Item>
                <Menu.Item key="3">
                        <span>
                            My Orders
                        </span>
                </Menu.Item>
                <Menu.Item key="4">
                        <span>
                            Me
                        </span>
                </Menu.Item>
                <Menu.Item key="5">
                        <span>
                            Admin
                        </span>
                </Menu.Item>
            </Menu>
            <Button onClick={logout}>
                logout
            </Button>
            </div>
        )
    }
    else
    {
        return <div>
            <Menu defaultSelectedKeys = {['1']} mode = "inline" items = {items2} onClick = {onClick}>
            <Menu.Item key = "1">
                        <span>
                            Books
                        </span>
            </Menu.Item>
            <Menu.Item key = "2">
                        <span>
                            My Carts
                        </span>
            </Menu.Item>
            <Menu.Item key = "3">
                        <span>
                            My Orders
                        </span>
            </Menu.Item>
            <Menu.Item key = "4">
                        <span>
                            Me
                        </span>
            </Menu.Item>
            </ Menu>
            <Button onClick={logout}>
                logout
            </Button>
            </div>
    }
}

export default UseMenu;