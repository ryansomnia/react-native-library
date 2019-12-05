export const FIND_ALL_BOOKS = "FIND_ALL_BOOKS";
export const FIND_ALL_BOOKS_SUCCESS = "FIND_ALL_BOOKS_SUCCESS";
export const FIND_ALL_BOOKS_ERROR = "FIND_ALL_BOOKS_ERROR";

export const FIND_BOOK = "FIND_BOOK";
export const FIND_BOOK_SUCCESS = "FIND_BOOK_SUCCESS";
export const FIND_BOOK_ERROR = "FIND_BOOK_ERROR";

export const EDIT_BOOK = "EDIT_BOOK";
export const EDIT_BOOK_SUCCESS = "EDIT_BOOK_SUCCESS";
export const EDIT_BOOK_ERROR = "EDIT_BOOK_ERROR";

export const ADD_BOOK = "ADD_BOOK";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_ERROR = "ADD_BOOK_ERROR";


export const DELETE_BOOK = "DELETE_BOOK";
export const DELETE_BOOK_SUCCESS = "DELETE_BOOK_SUCCESS";
export const DELETE_BOOK_ERROR = "DELETE_BOOK_ERROR";

export function findBook(id){
    return {
        id: id,
        type:FIND_BOOK
    };
}


export function findAllBooks(){
    return {
        type:FIND_ALL_BOOKS
    };
}


export function editBook(id,data){
    return{
        type: EDIT_BOOK,
        data: data,
        id: id
    };
}

export function addBook(data){
    return{
        type: ADD_BOOK,
        data: data,
    };
}

export function deleteBook(id){
    return{
        type: DELETE_BOOK,
        id:id
    };
}