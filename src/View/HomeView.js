import React from "react";
import {Layout} from "antd";
import {HeaderInfo} from "../Components/HeaderInfo";
import "../ccs/home.css"
import {SideBar} from "../Components/SideBar";
import {HomeCarousel} from "../Components/Carousel";
import {BookList} from "../Components/BookList";
import {SearchBar} from "../Components/SearchBar";
import {Button} from "antd";

const {Header,Content} = Layout;
export class HomeView extends React.Component{
    render()
    {
        return <Layout>
                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar />
                    <Content>
                        <div className={"content HomeCarousel"}>
                            <HomeCarousel />
                        </div>
                        <div className = {"content BookCard"}>
                            <BookList />
                        </div>
                    </Content>
                </Layout>
            </Layout>
    }
}