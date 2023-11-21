import React from "react";
import {Descriptions} from "antd";

export class Introduction extends React.Component
{
    render() {
        const info = this.props.info.book;

        return<div>

            <Descriptions bordered column = {1}>
                <Descriptions.Item label = "Descriptions">{info.description}</Descriptions.Item>
                    </Descriptions>
        </div>
    }
}