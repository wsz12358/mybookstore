import React from 'react';
import { BrowserRouter, Route, Routes, Redirect} from 'react-router-dom';
import {HomeView} from "./View/HomeView";
import {CartView} from "./View/CartView";
import {MeView} from "./View/MeView";
import {BookView} from "./View/BookView";

export class BasicRoute extends React.Component{
    render() {
        return <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<HomeView />} exact/>
                <Route path = "/cart" element = {<CartView />}/>
                <Route path = "/me" element = {<MeView />}/>
                <Route path = "/details" element = {<BookView />}/>
            </Routes>
        </BrowserRouter>
    }
}