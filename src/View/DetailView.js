import React from "react";
import {Button, Layout} from "antd";
import {HeaderInfo} from "../Components/HeaderInfo";
import "../ccs/cartview.css"
import {SideBar} from "../Components/SideBar";
import {Cart} from "../Components/Cart";
import {AddOrders} from "../Service/OrderService";

const {Header,Content} = Layout;
export class CartView extends React.Component{
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
                        <div className={"cartcontent title"}>
                            Detailed View
                        </div>
                        <div className={"cartcontent cart"}>
                            <Cart />
                        </div>
                        <div className={"cartcontent purchse"}>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}