import {Menu} from "antd";
import React from "react";
import {useNavigate} from "react-router-dom";

const items = [
    {
        label: "Books",
        key: "/",
    },
    {
        label: "My Cart",
        key: "/cart",
    },
    {
        label: "My Orders",
        key: "",
    },
    {
        label: "Me",
        key: "/me",
    }
]


const UseMenu = () =>
{
    const navigate = useNavigate()

    const onClick = (e) => {
        navigate(e.key, {replace: true})
    } 

    return(
        <Menu defaultSelectedKeys = {['1']} mode = "inline" items = {items} onClick = {onClick}>
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
        </Menu>
    )
}

export default UseMenu;