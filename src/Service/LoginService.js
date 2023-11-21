import {postRequest} from "../utils/ajax";

export const checkUser = (data, callback) => {
    const url = `http://localhost:8080/log/login`;
    return postRequest(url, data, callback);
};

export const getUsers = (data, callback) => {
    const url = `http://localhost:8080/log/getall`;
    return postRequest(url, data, callback);
};

export const ChangeBan = (data, callback) => {
    const url = `http://localhost:8080/log/banchange`;
    return postRequest(url, data, callback);
};

export const addUser = (data, callback) => {
    const url = `http://localhost:8080/log/add`;
    return postRequest(url, data, callback);
}

export const ifUserExist = (data, callback) => {
    const url = `http://localhost:8080/log/check`;
    return postRequest(url, data, callback);
}

export const Logout = (data, callback) => {
    const url = `http://localhost:8080/log/logout`;
    return postRequest(url, data, callback);
}