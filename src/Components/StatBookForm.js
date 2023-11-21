import React from "react";
import {Button, DatePicker, Input, Table, Tag} from "antd";
import {deleteBook, getBooks} from "../Service/BookService";
import Search from "antd/es/input/Search";
import {getOrderByUser, getOrders} from "../Service/OrderService";

const {Column, ColumnGroup} = Table;

const { RangePicker } = DatePicker;

export class StatBookForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    handleSelectTime = (value,dateString) => {
        var date1 = new Date(dateString[0]);
        var date2 = new Date(dateString[1]);
        if (dateString[0] === "" && dateString[1] === "")
        {
            const callback = (data) => {
                var newbooks = []
                var total = 0
                var price = 0
                data.map((item, index, err) => {
                    item.orderProducts.map((item, index, err) => {
                        var include = false
                        newbooks.map((temp, index, err) => {
                                if (temp.book.bookId === item.book.bookId) {
                                    include = true;
                                    temp.sale += item.purchaseNum;
                                }
                            }
                        )
                        if (!include) {
                            newbooks.push({book: item.book, sale: item.purchaseNum})
                        }
                        total += item.purchaseNum
                        price += item.purchaseNum * item.book.price
                    })
                    this.setState({books: newbooks, total: total, price: price})
                })
            }

            getOrderByUser({"search":null, id: JSON.parse(window.localStorage.getItem("user")).userId}, callback);
            return;
        }
        const callback = (data) => {
            data = data.filter(function(temp){
                var tempdate = new Date(temp.ordertime)
                if (date1 <= tempdate && tempdate <= date2) {
                    return true;}});
            var newbooks = []
            var total = 0
            var price = 0
            data.map((item, index, err)=>
            {
                item.orderProducts.map((item, index, err)=>
                {
                    var include = false
                    newbooks.map((temp, index, err)=>
                        {
                            if (temp.book.bookId === item.book.bookId)
                            {
                                include = true;
                                temp.sale += item.purchaseNum;
                            }
                        }
                    )
                    if (!include)
                    {
                        newbooks.push({book: item.book, sale: item.purchaseNum})
                    }
                    total += item.purchaseNum
                    price += item.purchaseNum * item.book.price

                })
            })
            this.setState({books: newbooks, total: total, price: price})
        }

        getOrderByUser({"search":null, id: JSON.parse(window.localStorage.getItem("user")).userId}, callback);

    }
    componentDidMount()
    {
        const callback = (data) =>
        {
            var newbooks = []
            var total = 0
            var price = 0
            data.map((item, index, err)=>
            {
               item.orderProducts.map((item, index, err)=>
               {
                   var include = false
                   newbooks.map((temp, index, err)=>
                       {
                           if (temp.book.bookId === item.book.bookId)
                           {
                               include = true;
                               temp.sale += item.purchaseNum;
                           }
                       }
                   )
                   if (!include)
                   {
                       newbooks.push({book: item.book, sale: item.purchaseNum})
                   }
                   total += item.purchaseNum
                   price += item.purchaseNum * item.book.price

               })
            })
            this.setState({books: newbooks, total: total, price: price})
        };
        getOrderByUser({"search":null, id: JSON.parse(window.localStorage.getItem("user")).userId}, callback);
    }

    render() {

        return (
            <div>
                <RangePicker onChange={this.handleSelectTime}/>
                <Tag>
                    total: {this.state.total}
                </Tag>
                <Tag>
                    price: {this.state.price}
                </Tag>
                <Table dataSource = {this.state.books}>
                    <ColumnGroup title = "Book">
                        <Column title = "ID" dataIndex = "book"
                                render = {(image) =>
                                    <div>
                                        {image.bookId}
                                    </div>
                                }
                        />

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
                                            {book.name}
                                        </div>
                                    )
                                }
                        />
                        <Column title = "inventory" dataIndex = "inventory"
                                render = {(name) =>
                                    (
                                        <div>
                                            {name}
                                        </div>
                                    )
                                }
                        />
                        <Column title = "sale" dataIndex = "sale"
                                render = {(sale) =>
                                    (
                                        <div>
                                            {sale}
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