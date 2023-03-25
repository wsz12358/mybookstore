import React from "react";
import "../ccs/home/HeaderInfo.css";
import {Row, Col} from "antd";
import logo from "../sources/mrfz.png";
import logoFont from "../sources/logo-name.svg";
export class HeaderInfo extends React.Component {
    render() {
        return <div id = "header">
            <div id = "headerContent">
            <Row>
                <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
                <img id = "logo" src = {logo} alt = "logo"/>
                <img alt="Book Store"  id ="logo-font" src={logoFont} style={{ height:40 }}/>
                </Col>
                <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
                <div id = "welcome">
                    Hello、ドクター!
                </div>
                </Col>
            </Row>
        </div>
        </div>
    }
}