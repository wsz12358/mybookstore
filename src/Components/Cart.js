import React from "react";
import {Button, Input, Table, Tag} from "antd";
import {AddOrders} from "../Service/OrderService";
import {getCarts} from "../Service/CartService";
import {getBooks} from "../Service/BookService";

const {Column, ColumnGroup} = Table;


export class Cart extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {carts: []};
        this.socket = null;
        var userId = JSON.parse(window.localStorage.getItem("user")).userId;
        var socketUrl = "ws://localhost:8080/ws/transfer/" + userId;

        console.log(socketUrl)
        this.socket = new WebSocket(socketUrl);
        this.socket.onopen = function ()
        {
            console.log("socket已连接");
        }

        this.socket.onmessage = msg =>
        {
            var mes = msg.data;
            var serverMsg = "收到服务端信息：" + mes;
            console.log(serverMsg);
            this.socket.close();
        }

        this.socket.onclose = function () {
            console.log("websocket已关闭");
        };

        this.socket.onerror = function () {
            console.log("websocket发生了错误");
        }
    }

    componentDidMount()
    {
        const callback = (data) =>
        {
            this.setState({carts: data})
        };
        getCarts({"search":null, userauthid: JSON.parse(window.localStorage.getItem("user")).userId}, callback);
    }

    render() {


        const onClick = (data) =>
        {
            var myDate = new Date;
            var year = myDate.getFullYear(); //获取当前年
            var mon = myDate.getMonth() + 1; //获取当前月
            var date = myDate.getDate(); //获取当前日
            var now = year + "-" + mon + "-" + date;
                const orderinfo = {
                    ordertime: now,
                    orderstate: "dealing",
                    id: JSON.parse(window.localStorage.getItem("user")).userId
                };
                const callback = (data) => {
                    console.log("success");
                }
                AddOrders(orderinfo, callback);
        }
        return (
            <div>
                <Table dataSource = {this.state.carts}>
                <ColumnGroup title = "Book">
                    <Column title = "Cover" dataIndex = "book"
                    render = {(book) =>
                        (
                            <div>
                                <img src = {book.image} style = {{height: 50, width: 50}}/>
                            </div>
                        )
                    }
                    />
                    <Column title = "Title" dataIndex = "book"
                    render = {(book) =>
                        (
                            <div>
                                <Tag>
                                    {book.name}
                                </Tag>
                            </div>
                        )
                    }
                    />
                </ColumnGroup>
                    <Column title = "Amount" dataIndex = "purchasenum" key = "purchasenum"
                    render = {(amount) =>
                        (
                            <div>
                                <Input defaultValue = {amount} style = {{width: "5em"}}/>
                            </div>
                        )
                    }
                    />
                    <Column title = "Price"
                            render = {(temp) =>
                                (
                                    <div>
                                        <Tag>
                                            {"$" + temp.book.price * temp.purchasenum}
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
                <Button onClick={onClick}>
                    buy it!
                </Button>
            </div>
        );
    }
}