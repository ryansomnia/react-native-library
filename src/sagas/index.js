
import { all, fork } from 'redux-saga/effects';
import {
    watchFindAllBooks, watchFindBook, watchEditBook,
    watchAddBook, watchDeleteBook

} from './book';


export default function* sagas() {
    yield all([
        fork(watchFindAllBooks),
        fork(watchFindBook),
        fork(watchEditBook),
        fork(watchAddBook),
        fork(watchDeleteBook)
    ]);
}