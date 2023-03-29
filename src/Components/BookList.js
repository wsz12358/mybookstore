import React from "react";
import {Book} from "./Book";
import {List} from "antd";
import data from "../Service/getBook.js";

const data1 = [
    {
        id: 1,
        type: "编程",
        inventory: 1000,
        author: "凯S.霍斯特曼",
        image: "http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
        name: 'Java核心技术卷II',
        price: '95.20',
        description: "本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。",
    }
    ,
    {
        id: 2,
        type: "编程",
        author: "兰德尔·E·布莱恩特",
        image: "http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg",
        name: '深入理解计算机系统',
        price: '136.90',
        description: "程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！",
    }
    ,
    {
        id: 3,
        image: "http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg",
        name: "Effective C++",
        price: "51.30",
    }
    ,
    {
        id: 4,
        image: "http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg",
        name: "小王子",
        price: "8.89",
    }
    ,
    {
        id: 5,
        image: "http://img3m0.ddimg.cn/4/24/9317290-1_w_5.jpg",
        name: "Java编程思想",
        price: "91.20",
    }
    ,
    {
        id: 6,
        image: "http://img3m7.ddimg.cn/43/9/25352557-1_w_3.jpg",
        name: "魔兽世界编年史套装(全三卷)",
        price: "449.20",
    }
    ,
    {
        id: 7,
        image: "http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg",
        name: "三体：全三册",
        price: "50.20",
    }
    ,
    {
        id: 8,
        image: "http://img3m7.ddimg.cn/13/15/27912667-1_u_1.jpg",
        name: "悲惨世界（上中下）（精装版）",
        price: "104.00",
    }
    ,
    {
        id: 9,
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