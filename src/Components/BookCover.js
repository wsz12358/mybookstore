import React from "react";

export class BookCover extends React.Component
{
    render() {

        const info = this.props.info.book;
        return<div>
            <img src = {info.image} alt = {info.name} style={{width: 350, height: 350}}/>
        </div>
    }
}