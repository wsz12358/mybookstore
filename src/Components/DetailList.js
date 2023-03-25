import React from "react";
import {Descriptions} from "antd";

export class DetailList extends React.Component
{
    render() {
        return<div>
            <Descriptions title = "book info" bordered column = {1} style = {{width: 500}}>
                <Descriptions.Item label = "title">Java核心技术卷II</Descriptions.Item>
                <Descriptions.Item label = "author">凯S.霍斯特曼</Descriptions.Item>
                <Descriptions.Item label = "publisher">me</Descriptions.Item>
                <Descriptions.Item label = "price">95.20</Descriptions.Item>
                <Descriptions.Item label = "status">out of stock</Descriptions.Item>
            </Descriptions>
        </div>
    }
}