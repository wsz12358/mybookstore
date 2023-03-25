import React from "react";
import {Button, Layout} from "antd";
import {HeaderInfo} from "../Components/HeaderInfo";
import "../ccs/bookview.css"
import {SideBar} from "../Components/SideBar";
import {DetailList} from "../Components/DetailList";
import {BookCover} from "../Components/BookCover";
import {Introduction} from "../Components/Introduction";

const {Header,Content} = Layout;
export class BookView extends React.Component{
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
                        <div className={"detailcontent cover_details"}>
                            <div className={"cover"}>
                                <BookCover />
                            </div>
                            <div className={"details"}>
                                <DetailList />
                            </div>
                        </div>
                        <div className={"detailcontent introduction"}>
                            <Introduction />
                        </div>
                        <div className={"detailcontent buttons"}>
                            <Button> Back </Button>
                            <Button> Add to cart </Button>
                            <Button> Purchase now </Button>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}