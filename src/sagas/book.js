import { put, takeLatest } from 'redux-saga/effects';
import {
    FIND_ALL_BOOKS,
    FIND_ALL_BOOKS_SUCCESS,
    FIND_ALL_BOOKS_ERROR,

    FIND_BOOK,
    FIND_BOOK_SUCCESS,
    FIND_BOOK_ERROR,

    EDIT_BOOK,
    EDIT_BOOK_SUCCESS,
    EDIT_BOOK_ERROR ,

    ADD_BOOK,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_ERROR,

    
    DELETE_BOOK,
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_ERROR 
   
} from '../actions/book';
import { filterFetch } from '../utils/apiUtils';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


function* findBook(action) {
    // console.log(action);
    try {

        const json = yield fetch('http://10.0.2.2:3000/book/' + action.id)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText || "Error Unknown");

            }
            return response.json();

        });
        yield put({
            type: FIND_BOOK_SUCCESS,
            data: json.data
        });

    } catch (error) {
        yield put({
            type: FIND_BOOK_ERROR,
            error: error
        });
    }

}

function* findAllBooks() {
    try {
        const json = yield fetch('http://10.0.2.2:3000/book/')
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText || "Error Unknown");

                }
                return response.json();

            });
            console.log(json);
        yield put({
            type: FIND_ALL_BOOKS_SUCCESS,
            data: json.data
        });

    } catch (error) {
        console.log(error);
        yield put({
            type: FIND_ALL_BOOKS_ERROR,
            error: error
        });
    }

}

function* editBook(action){
    try{
        const data = yield filterFetch(
            fetch('http://10.0.2.2:3000/book/' + action.id,{
                method:'PUT',
                headers: { 'Content-type' : 'application/json' },
                body: JSON.stringify(action.data)
            })
        );
     
        yield put({
            type: EDIT_BOOK_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: EDIT_BOOK_ERROR,
            error:error
        });
    }
}

function* addBook(action){
    try{
        const data = yield filterFetch(
            fetch('http://10.0.2.2:3000/book/',{
                method:'POST',
                headers: { 'Content-type' : 'application/json' },
                body: JSON.stringify(action.data)
            })
        );
     
        yield put({
            type: ADD_BOOK_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: ADD_BOOK_ERROR,
            error:error
        });
    }
}

function* deleteBook(action){
    try{
        const data = yield filterFetch(
            fetch('http://10.0.2.2:3000/book/' + action.id,{
                method:'DELETE',
                headers: { 'Content-type' : 'application/json' },
            })
        );
     
        yield put({
            type: DELETE_BOOK_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: DELETE_BOOK_ERROR,
            error:error
        });
    }
}

export function* watchEditBook() {
    yield takeLatest(EDIT_BOOK, editBook);
}
export function* watchFindBook() {
    yield takeLatest(FIND_BOOK, findBook);
}
export function* watchFindAllBooks() {
    yield takeLatest(FIND_ALL_BOOKS, findAllBooks);
}
export function* watchAddBook(){
    yield takeLatest(ADD_BOOK, addBook);
}

export function* watchDeleteBook(){
    yield takeLatest(DELETE_BOOK, deleteBook);
}