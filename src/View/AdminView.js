import React, {useState} from "react";
import {Button, Form, Input, Layout, Modal} from "antd";
import {HeaderInfo} from "../Components/HeaderInfo";
import "../ccs/orderview.css"
import {SideBar} from "../Components/SideBar";
import {Cart} from "../Components/Cart";
import {Order} from "../Components/Order";
import {BookList} from "../Components/BookList";
import {AdmBookForm} from "../Components/AdmBookForm";
import {useNavigate} from "react-router-dom";
import {LoginForm} from "../Components/LoginForm";
import {addBook} from "../Service/BookService";

const {Header,Content} = Layout;
const { TextArea } = Input;

function withMyHook(Component) {
    return function WrappedComponent(props) {
        const myHookValue = useState(false);
        return <Component {...props} myHookValue={myHookValue} />;
    }
}
export class AdminView extends React.Component{

    formRef = React.createRef();
    UseFinish1 = (event) =>
    {
        let data =
            {
                name: event.name,
                type: event.type,
                author: event.author,
                price: event.price,
                description: event.description,
                inventory: event.inventory,
                image: event.image
            }
        const callback = (data) =>
        {
            console.log(data);
        };
        addBook(data, callback);
        this.formRef.current.resetFields();
    }
    render()
    {
        const [isModalOpen, setIsModalOpen] = this.props.myHookValue;
        const showModal = () => {
            setIsModalOpen(true);
        };
        const handleOk = () => {
            setIsModalOpen(false);
            window.location.reload();
        };
        const handleCancel = () => {
            setIsModalOpen(false);
            window.location.reload();
        };
        return <div>
            <Layout>
                <Header>
                    <HeaderInfo />
                </Header>
                <Layout>
                    <SideBar />
                    <Content>
                        <div className={"ordercontent title"}>
                            Welcome,administrator!
                        </div>
                        <div className={"ordercontent buttons"}>
                            <Button href={"/admin/book"}> Book </Button>
                            <Button href={"/admin/order"}> Order </Button>
                            <Button href={"/admin/user"}> User </Button>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    }
}
AdminView = withMyHook(AdminView);