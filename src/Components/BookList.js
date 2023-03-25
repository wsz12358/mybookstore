import React from "react";
import {Book} from "./Book";
import {List} from "antd";
import data from "../Service/getBook.js";

const data1 = [
    {
        image: "http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
        name: 'Java核心技术卷II',
        price: '95.20',
    }
    ,
    {
        image: "http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg",
        name: '深入理解计算机系统',
        price: '136.90',
    }
    ,
    {
        image: "http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg",
        name: "Effective C++",
        price: "51.30",
    }
    ,
    {
        image: "http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg",
        name: "小王子",
        price: "8.89",
    }
    ,
    {
        image: "http://img3m0.ddimg.cn/4/24/9317290-1_w_5.jpg",
        name: "Java编程思想",
        price: "91.20",
    }
    ,
    {
        image: "http://img3m7.ddimg.cn/43/9/25352557-1_w_3.jpg",
        name: "魔兽世界编年史套装(全三卷)",
        price: "449.20",
    }
    ,
    {
        image: "http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg",
        name: "三体：全三册",
        price: "50.20",
    }
    ,
    {
        image: "http://img3m7.ddimg.cn/13/15/27912667-1_u_1.jpg",
        name: "悲惨世界（上中下）（精装版）",
        price: "104.00",
    }
    ,
    {
        image: "http://img3m1.ddimg.cn/82/3/25229341-1_w_2.jpg",
        name: "动物农场",
        price: "20.40",
    }
];
export class BookList extends React.Component
{
    const
    render ()
    {
        return <List grid = {{
                gutter: 5,
                column: 4,
            }
            }
            dataSource = {data1}
            renderItem = {item => (
                    <List.Item>
                        <Book  info = {item} />
                    </List.Item>
            )}    >
            </List>
    }
}