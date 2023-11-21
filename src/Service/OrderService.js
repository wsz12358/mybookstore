import {postRequest} from "../utils/ajax";

export const getOrders = (data, callback) => {
    const url = `http://localhost:8080/order/get`;
    postRequest(url, data, callback);

};

export const getOrderByUser = (data, callback) => {
    const url = `http://localhost:8080/order/getbyuser`;
    postRequest(url, data, callback);

};

export const AddOrders = (data, callback) =>
{
    const url= "http://localhost:8080/order/add";
    postRequest(url, data, callback);
}

export const DeleteOrder = (data, callback) =>
{
    const url = "http://localhost:8080/order/delete";
    postRequest(url, data, callback);
}