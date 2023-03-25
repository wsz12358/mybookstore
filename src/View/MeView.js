import React from "react";
import {Button, Layout, Input, Space} from "antd";
import {HeaderInfo} from "../Components/HeaderInfo";
import "../ccs/meview.css"
import {SideBar} from "../Components/SideBar";
import App from "../Components/Avatar";

const {Header,Content} = Layout;
const {TextArea} = Input;
export class MeView extends React.Component{
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
                        <div className = {"me profiletitle"}>
                            My Profile
                        </div>
                        <div className={"me name title"}>
                            Name
                        </div>
                        <div className={"me name input"}>
                            <Space.Compact>
                                <Input />
                                <Input />
                            </Space.Compact>
                        </div>
                        <div className={"me twitter title"}>
                            Twitter
                        </div>
                        <div className={"me twitter input"}>
                            <Space>
                                <Input style = {{width: "200%"}}/>
                            </Space>
                        </div>
                        <div className={"me AvatarNote"}>
                            <Space>
                            <div className = {"me avatar"}>
                                <div className = {"me avatar title"}>
                                    Avatar
                                </div>
                                <div>
                                    <App />
                                </div>
                            </div>
                            <div className = {"me Note"}>
                             <div className = {"me note title"}>
                                 Note
                             </div>
                             <div>
                                 <div>
                                     <TextArea rows={4} />
                                 </div>
                             </div>
                         </div>
                            </Space>
                        </div>
                        <div className = {"me buttons"}>
                            <Space size = {50}>
                                <Button> Save </Button>
                                <Button> Cancel </Button>
                            </Space>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}