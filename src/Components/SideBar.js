import React from "react";
import {Button, Layout, Menu} from "antd";
import "../ccs/home/SideBar.css";
import UseMenu from "./Menu";
import {getBooks} from "../Service/BookService";

const {Sider} = Layout;
export class SideBar extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
       return <div id = "mySider">
           <Sider>
               <UseMenu />
           </Sider>
       </div>
    }
}