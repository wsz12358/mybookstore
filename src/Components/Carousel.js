import React from "react";
import {Carousel} from "antd";
import book1 from "../sources/Carousel/book1.jpg";
import book2 from "../sources/Carousel/book2.jpg";
import book3 from "../sources/Carousel/book3.jpg";
import book4 from "../sources/Carousel/book4.jpg";
import "../ccs/home/HomeCarousel.css"

export class HomeCarousel extends React.Component {
    render()
    {
        return <div id = "Carousel">
            <Carousel autoplay>
                <img className={"CarPic CarPic1"} src ={book1}/>
                <img className={"CarPic CarPic2"} src ={book2}/>
                <img className={"CarPic CarPic3"} src ={book3}/>
                <img className={"CarPic CarPic4"} src ={book4}/>
            </Carousel>
        </div>
    }
}