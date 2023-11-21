import React from 'react';
import { BrowserRouter, Route, Routes, Redirect} from 'react-router-dom';
import {HomeView} from "./View/HomeView";
import {CartView} from "./View/CartView";
import {MeView} from "./View/MeView";
import {BookView} from "./View/BookView";
import {LoginView} from "./View/LoginView";
import {OrderView} from "./View/OrderView";
import {AdminView} from "./View/AdminView";
import {RegView} from "./View/RegView";
import {AdminBookView} from "./View/AdminBookView";
import {AdminOrderView} from "./View/AdminOrderView";
import {AdminUserView} from "./View/AdminUserView";
import {AdminStatBookView} from "./View/AdminStatBookView";
import {AdminStatUserView} from "./View/AdminStatUserView";
import {StatBookView} from "./View/StatBookView";

export class BasicRoute extends React.Component{

    componentDidMount() {
    }

    render() {
        return <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<LoginView />} exact/>
                <Route path = "/home" element = {<HomeView />} />
                <Route path = "/cart" element = {<CartView />}/>
                <Route path = "/me" element = {<MeView />}/>
                <Route path = "/details" element = {<BookView />}/>
                <Route path = "/order" element = {<OrderView />}/>
                <Route path = "/admin" element = {<AdminView />}/>
                <Route path = "/admin/book" element = {<AdminBookView />}/>
                <Route path = "/admin/order" element = {<AdminOrderView />}/>
                <Route path = "/admin/user" element = {<AdminUserView />}/>
                <Route path = "/reg" element = {<RegView />}/>
                <Route path = "/stats/book" element = {<AdminStatBookView />}/>
                <Route path = "/stats/user" element = {<AdminStatUserView />}/>
                <Route path = "/stats" element = {<StatBookView />}/>
            </Routes>
        </BrowserRouter>
    }
}