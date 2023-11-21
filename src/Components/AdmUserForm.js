import React from "react";
import {Button, Input, Table, Tag} from "antd";
import {deleteBook, getBooks} from "../Service/BookService";
import {getOrders, DeleteOrder} from "../Service/OrderService";
import {Link} from "react-router-dom";
import {ChangeBan, getUsers} from "../Service/LoginService";

const {Column, ColumnGroup} = Table;


export class AdmUserForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {user: []};
    }

    componentDidMount()
    {
        const callback = (data) =>
        {
            this.setState({user: data})
        };
        getUsers({"search":null}, callback);
    }

    render() {

        return (
            <div>
                <Table dataSource={this.state.user}>
                    <Column title="ID" dataIndex="userId" key="userId"
                            render={(temp) =>
                                (
                                    <div>
                                        {temp}
                                    </div>
                                )
                            }
                    />
                    <Column title="username" dataIndex="username" key="username"
                            render={(temp) =>
                                (
                                    <div>
                                        {temp}
                                    </div>
                                )
                            }
                    />
                    <Column title="state" dataIndex="ability" key="ability"
                            render={(temp) =>
                                (
                                    <div>
                                        {temp == 0 ? "banned" : "normal"}
                                    </div>
                                )
                            }
                    />
                    <Column title = "Action" dataIndex = "userId"
                            render = {(OrderId) =>
                                (
                                    <Button name={"delete"} onClick={()=>{
                                        let data = {id: OrderId};
                                        ChangeBan(data, ()=>{});
                                        window.location.reload();
                                    }}>
                                        ban/restore
                                    </Button>
                                )
                            }
                    />
                </Table>
            </div>
        );
    }
}