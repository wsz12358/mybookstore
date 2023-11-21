import React from "react";
import {Button, Input, Table, Tag} from "antd";
import {deleteBook, getBooks} from "../Service/BookService";
import Search from "antd/es/input/Search";

const {Column, ColumnGroup} = Table;


export class AdmBookForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {books: []};
    }

    componentDidMount()
    {
        const callback = (data) =>
        {
            this.setState({books: data, shownbook: data})
        };
        getBooks({"search":null}, callback);
    }

    onSearch = (values) =>
    {
        const callback =  (data) => {
            let newdata = data.filter(function(book){if (book.name.indexOf(values) != -1) {
                return true;}});
            this.setState({shownbook: newdata});
        };
        getBooks({"search":null}, callback);

    }
    render() {

        return (
            <div>
                <div className={"mySearchBar"}>
                    <Search placeholder = "input search text"
                            style = {{width: 500}}
                            onSearch = {this.onSearch}
                            enterButton = "Search"></Search>
                </div>
                <Table dataSource = {this.state.shownbook}>
                    <ColumnGroup title = "Book">
                        <Column title = "ID" dataIndex = "bookId"
                                render = {(image) =>
                                    <div>
                                        {image}
                                    </div>
                                }
                        />

                        <Column title = "Cover" dataIndex = "image"
                                render = {(image) =>
                                    (
                                        <div>
                                            <img src = {image} style = {{height: 50, width: 50}}/>
                                        </div>
                                    )
                                }
                        />
                        <Column title = "Title" dataIndex = "name"
                                render = {(name) =>
                                    (
                                        <div>
                                                {name}
                                        </div>
                                    )
                                }
                        />
                        <Column title = "isbn" dataIndex = "isbn"
                                render = {(name) =>
                                    (
                                        <div>
                                            {name}
                                        </div>
                                    )
                                }
                        />
                        <Column title = "author" dataIndex = "author"
                                render = {(name) =>
                                    (
                                        <div>
                                            {name}
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
                        <Column title = "Price" dataIndex = "price"
                                render = {(price) =>
                                    (
                                        <div>
                                                {price}
                                        </div>
                                    )
                                }
                        />
                            <Column title = "Action" dataIndex = "bookId"
                                render = {(bookId) =>
                                    (
                                        <Button name={"delete"} onClick={()=>{
                                            console.log(bookId);
                                            let data = {bookId: bookId};
                                            deleteBook(data, ()=>{});
                                            window.location.reload();
                                        }}>
                                            delete
                                        </Button>
                                    )
                                }
                        />
                    </ColumnGroup>
                </Table>
            </div>
        );
    }
}