import React from "react";
import {Layout, Menu} from "antd";
import "../ccs/home/SideBar.css";
import UseMenu from "./Menu";

const {Sider} = Layout;
export class SideBar extends React.Component
{
    render() {

       return <div id = "mySider">
           <Sider>5
               {/*<UseMenu />*/}
           </Sider>
       </div>
    }
}