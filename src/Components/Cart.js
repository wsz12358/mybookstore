import React from "react";
import {Table, Tag, Space, Input} from "antd";
const {Column, ColumnGroup} = Table;

const data = [
    {
        bookcover: "http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
        title: "'Java核心技术卷II'",
        amount: "1",
        price: "95.20"
    },
    {
        bookcover: "http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg",
        title: "'Java核心技术卷II'",
        amount: "1",
        price: "95.20"
    }
]
export class Cart extends React.Component
{
    render() {
        return (
            <div>
                <Table dataSource = {data}>
                <ColumnGroup title = "Book">
                    <Column title = "Cover" dataIndex = "bookcover" key = "bookcover"
                    render = {(bookcover) =>
                        (
                            <div>
                                <img src = {bookcover} style = {{height: 50, width: 50}}/>
                            </div>
                        )
                    }
                    />
                    <Column title = "Title" dataIndex = "title" key = "title"
                    render = {(title) =>
                        (
                            <div>
                                <Tag>
                                    {title}
                                </Tag>
                            </div>
                        )
                    }
                    />
                </ColumnGroup>
                    <Column title = "Amount" dataIndex = "amount" key = "amount"
                    render = {(amount) =>
                        (
                            <div>
                                <Input defaultValue = {amount} style = {{width: "5em"}}/>
                            </div>
                        )
                    }
                    />
                    <Column title = "Price" dataIndex = "price" key = "price"
                            render = {(amount) =>
                                (
                                    <div>
                                        <Tag>
                                            {"$" + amount}
                                        </Tag>
                                    </div>
                                )

                            }/>
                    <Column title = "Action" dataIndex = "action" key = "action"
                     render = {(amount) =>
                         (
                             <div>
                                 <a>Delete</a>
                             </div>
                         )
                     }
                    />
                </Table>
            </div>
        );
    }
}