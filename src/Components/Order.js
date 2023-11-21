import React from "react";
import {Input, Table, Tag} from "antd";
import {getOrderByUser, getOrders} from "../Service/OrderService";
import {Link} from "react-router-dom";
import { DatePicker, Space } from 'antd';
import Search from "antd/es/input/Search";
import {getBooks} from "../Service/BookService";
import {getCarts} from "../Service/CartService";

const { RangePicker } = DatePicker;

const {Column, ColumnGroup} = Table;

export class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {orders: []};
    }

    componentDidMount() {

        const callback = (data) =>
        {
            this.setState({orders: data})
        };
        getOrderByUser({"search":null, id: JSON.parse(window.localStorage.getItem("user")).userId}, callback);


    }

    componentWillUnmount() {
    }

    handleSelectTime = (value,dateString) => {
        var date1 = new Date(dateString[0]);
        var date2 = new Date(dateString[1]);
        if (dateString[0] === "" && dateString[1] === "")
        {
            const callback = (data) => {
                this.setState({orders: data});
            }

            getOrderByUser({search: null, id: JSON.parse(window.localStorage.getItem("user")).userId}, callback);
            return;
        }
        const callback = (data) => {
            let newdata = data.filter(function(temp){
                var tempdate = new Date(temp.ordertime)
                if (date1 <= tempdate && tempdate <= date2) {
                return true;}});
            this.setState({orders: newdata});
        }

        getOrderByUser({search: null, id: JSON.parse(window.localStorage.getItem("user")).userId}, callback);

    }

    onSearch = (values) =>
    {
        const callback =  (data) => {
            let newdata = data.filter(
                function(temp)
            {
                let newops = temp.orderProducts.filter(function(op){if (op.book.name.indexOf(values) != -1) {
                    return true;}})
                if (newops.length !== 0) return true;
            });
            this.setState({orders: newdata});
        };
        getOrderByUser({search: null, id: JSON.parse(window.localStorage.getItem("user")).userId}, callback);

    }


    render() {

        return (
            <div>
                <div className={"mySearchBar"}>
                    <Search placeholder = "input search text" style = {{width: 500}} onSearch = {this.onSearch} enterButton = "Search"></Search>
                </div>
                <RangePicker onChange={this.handleSelectTime}/>
                <Table dataSource={this.state.orders}>
                    <Column title="books" dataIndex="orderProducts"
                            render={
                                (temp) => {
                                    return <Table dataSource={temp} pagination={false}>
                                        <Column dataIndex="book"
                                                render={
                                                    (temp) =>
                                                        (
                                                            <div>
                                                                <img src={temp.image} style={{height: 50, width: 50}}/>
                                                            </div>
                                                        )
                                                }/>
                                    </Table>
                                }
                            }
                    />
                    <Column title="Total Price" dataIndex="total_price" key="total_price"
                            render={(temp) =>
                                (
                                    <div>
                                        ￥{temp}
                                    </div>
                                )
                            }
                    />
                    <Column title="ordertime" dataIndex="ordertime" key="ordertime"
                            render={(temp) =>
                                (
                                    <div>
                                        {temp}
                                    </div>
                                )
                            }
                    />
                    <Column title="orderstate" dataIndex="orderstate" key="orderstate"
                            render={(temp) =>
                                (
                                    <div>
                                        {temp}
                                    </div>
                                )
                            }
                    />
                    <Column title="Action" dataIndex="action" key="action"
                            render={(amount) =>
                                (
                                    <div>
                                        <Link to={{
                                            pathname: '/orderdetails',
                                            search: '?id=' + this.state.OrderId,
                                            state: this.state.OrderId
                                        }}>
                                            See details
                                        </Link>
                                    </div>
                                )
                            }
                    />
                </Table>
            </div>
        );
    }
}