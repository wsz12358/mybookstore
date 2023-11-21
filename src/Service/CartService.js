import {postRequest, postRequest_v2} from "../utils/ajax";


export const getCarts = (data, callback) => {
    const url = `http://localhost:8080/cart/get`;
    postRequest(url, data, callback);
};

export const AddCarts = (data, callback) =>
{
    const url= "http://localhost:8080/cart/save";
    postRequest(url, data, callback);
}
