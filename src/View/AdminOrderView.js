import React, {useState} from "react";
import {Button, Form, Input, Layout, Modal} from "antd";
import {HeaderInfo} from "../Components/HeaderInfo";
import "../ccs/orderview.css"
import {SideBar} from "../Components/SideBar";
import {Cart} from "../Components/Cart";
import {BookList} from "../Components/BookList";
import {AdmOrderForm} from "../Components/AdmOrderForm";
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
export class AdminOrderView extends React.Component{

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
                        <div className={"ordercontent buttons"}>
                            <Button href={"/admin/book"}> Book </Button>
                            <Button href={"/admin/order"}> Order </Button>
                            <Button href={"/admin/user"}> User </Button>
                        </div>
                        <div className={"ordercontent title"}>
                            administrate the Orders
                        </div>
                        <div className={"ordercontent order"}>
                            <AdmOrderForm />
                        </div>
                        <div className={"detailcontent buttons"}>
                        <Button onClick={showModal}> add </Button>

                    </div>
                    </Content>
                    <Modal title="Add Books" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
                        <Form className="login-form" onFinish={this.UseFinish1} ref={this.formRef}>
                            <Form.Item label="name" name="name" rules={[{required: true, message: 'Please input book name!'}]}>
                                {
                                    <Input
                                        placeholder="name"
                                    />
                                }
                            </Form.Item>
                            <Form.Item label="type" name="type" rules={[{required: true, message: 'Please input book type!'}]}>
                                <Input
                                    placeholder="type"
                                />
                            </Form.Item>
                            <Form.Item label="author" name="author" rules={[{required: true, message: 'Please input author!'}]}>
                                <Input
                                    placeholder="author"
                                />
                            </Form.Item>
                            <Form.Item label="price" name="price" rules={[{required: true, message: 'Please input price!'}]}>
                                <Input
                                    placeholder="price"
                                />
                            </Form.Item>
                            <Form.Item label="description" name="description">
                                <TextArea showCount
                                          maxLength={100}
                                          style={{ height: 120, marginBottom: 24 }}
                                          placeholder="description"/>
                            </Form.Item>
                            <Form.Item label="inventory" name="inventory" rules={[{required: true, message: 'Please input price!'}]}>
                                <Input
                                    placeholder="inventory"
                                />
                            </Form.Item>
                            <Form.Item label="image" name="image">
                                <Input
                                    placeholder="image"
                                />
                            </Form.Item>
                        </Form>
                    </Modal>

                </Layout>
            </Layout>
        </div>
    }
}
AdminOrderView = withMyHook(AdminOrderView);