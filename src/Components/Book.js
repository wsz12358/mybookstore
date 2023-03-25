import React from "react";
import {Card} from "antd"
    ;import {Link} from 'react-router-dom'

const {Meta} = Card;
export class Book extends React.Component
{
        render() {
            const info = this.props.info;

            return <Link to={{
                pathname: '/details'}}
                  target="_blank"
            >
                <Card
                style={{width: 181}}
                cover={<img alt = "book" src = {info.image} className={"book"}/>}
            >
                <Meta title = {info.name} description = {'$' + info.price}></Meta>
            </Card>
        </Link>
        }
}