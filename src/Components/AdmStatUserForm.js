import React from "react";
import {Button, DatePicker, Input, Table, Tag} from "antd";
import {deleteBook, getBooks} from "../Service/BookService";
import Search from "antd/es/input/Search";
import {getOrderByUser, getOrders} from "../Service/OrderService";

const {Column, ColumnGroup} = Table;

const { RangePicker } = DatePicker;

export class AdmStatUserForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    handleSelectTime = (value,dateString) => {
        var date1 = new Date(dateString[0]);
        var date2 = new Date(dateString[1]);
        if (dateString[0] === "" && dateString[1] === "")
        {
            const callback = (data) =>
            {
                var newusers = []
                data.map((item, index, err)=>
                {
                    var include = false;
                    newusers.map((temp, index, err)=>
                        {
                            if (temp.userAuth.userId === item.userAuth.userId)
                            {
                                include = true;
                                temp.total += item.total_price;
                            }
                        }
                    )
                    if (!include)
                    {
                        newusers.push({userAuth: item.userAuth, total: item.total_price})
                    }
                })
                newusers.sort((a, b)=>{return b.total - a.total})
                this.setState({users: newusers})
            };

            getOrders({"search":null}, callback);
            return;
        }
        const callback = (data) => {
            data = data.filter(function(temp){
                var tempdate = new Date(temp.ordertime)
                if (date1 <= tempdate && tempdate <= date2) {
                    return true;}});
            var newusers = []
            data.map((item, index, err)=>
            {
                var include = false;
                newusers.map((temp, index, err)=>
                    {
                        if (temp.userAuth.userId === item.userAuth.userId)
                        {
                            include = true;
                            temp.total += item.total_price;
                        }
                    }
                )
                if (!include)
                {
                    newusers.push({userAuth: item.userAuth, total: item.total_price})
                }
            })
            newusers.sort((a, b)=>{return b.total - a.total})
            this.setState({users: newusers})
        }
        getOrders({"search":null}, callback);
    }
    componentDidMount()
    {
        const callback = (data) =>
        {
            var newusers = []
            data.map((item, index, err)=>
            {
                    var include = false;
                    newusers.map((temp, index, err)=>
                        {
                            if (temp.userAuth.userId === item.userAuth.userId)
                            {
                                include = true;
                                temp.total += item.total_price;
                            }
                        }
                    )
                if (!include)
                {
                    newusers.push({userAuth: item.userAuth, total: item.total_price})
                }
            })
            newusers.sort((a, b)=>{return b.total - a.total})
            this.setState({users: newusers})
        };
        getOrders({"search": null}, callback);
    }

    render() {

        return (
            <div>
                <RangePicker onChange={this.handleSelectTime}/>
                <Table dataSource = {this.state.users}>
                    <ColumnGroup title = "User">
                        <Column title = "Username" dataIndex = "userAuth"
                                render = {(userAuth) =>
                                    <div>
                                        {userAuth.username}
                                    </div>
                                }
                        />
                        <Column title = "total price" dataIndex = "total"
                                render = {(price) =>
                                    (
                                        <div>
                                            {price}
                                        </div>
                                    )
                                }
                        />
                    </ColumnGroup>
                </Table>
            </div>
        );
    }
}