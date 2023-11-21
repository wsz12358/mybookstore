import React from "react";
import {Button, Layout} from "antd";
import {HeaderInfo} from "../Components/HeaderInfo";
import "../ccs/orderview.css"
import {SideBar} from "../Components/SideBar";
import {Cart} from "../Components/Cart";
import {Order} from "../Components/Order";

const {Header,Content} = Layout;
export class OrderView extends React.Component{
    render()
    {
        return <div>
            <Layout>
                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar />
                    <Content>
                        <div className={"ordercontent title"}>
                            My Orders
                        </div>
                        <div className={"ordercontent order"}>
                            <Order />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}