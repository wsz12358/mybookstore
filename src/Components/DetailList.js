import React from "react";
import {Descriptions} from "antd";

export class DetailList extends React.Component
{
    render() {
        const info = this.props.info.book;
        return<div>
            <Descriptions title = "book info" bordered column = {1} style = {{width: 500}}>
                <Descriptions.Item label = "title">{info.name}</Descriptions.Item>
                <Descriptions.Item label = "author">{info.author}</Descriptions.Item>
                <Descriptions.Item label = "publisher">me</Descriptions.Item>
                <Descriptions.Item label = "price">95.20</Descriptions.Item>
                <Descriptions.Item label = "status">stock: {info.inventory}</Descriptions.Item>
            </Descriptions>
        </div>
    }
}