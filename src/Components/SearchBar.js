import React from "react";
import {Input} from "antd";

const {Search} = Input;
export class SearchBar extends React.Component {
    render() {
        return<div className={"mySearchBar"}>
            <Search placeholder = "input search text" style = {{width: 500}} enterButton = "Search"></Search>
        </div>
    }
}