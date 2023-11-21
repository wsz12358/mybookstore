import {postRequest, postRequest_v2} from "../utils/ajax";


export const getBooks = (data, callback) => {
    const url = `http://localhost:8080/book/getBooks`;
    postRequest(url, data, callback);
};

export const getBook = (id, callback) => {
    const data = {id: id};
    const url = `http://localhost:8080/book/getBook`;
    postRequest_v2(url, data, callback);

};

export const addBook = (data, callback) => {
    const url = `http://localhost:8080/book/addBook`;
    postRequest(url, data, callback);
}

export const deleteBook = (data, callback) => {
    const url = `http://localhost:8080/book/deleteBook`;
    postRequest(url, data, callback);
}

export const updateBook = (data, callback) => {
    const url = `http://localhost:8080/book/updateBook`;
    postRequest(url, data, callback);
}

export const getBookByAuthor = (data, callback) => {
    const url = `http://localhost:8080/author/author`;
    postRequest(url, data, callback);
}

export const getBookByType = (data, callback) => {
    const url = `http://localhost:8080/book/findtype`;
    postRequest(url, data, callback);
}


