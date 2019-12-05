import {combineReducers} from 'redux';
import countReducer from './count';
import { findBook, findAllBooks, editBook, addBook, deleteBook } from './book';


const allReducers = combineReducers({
  count: countReducer,
  book: findAllBooks, 
  detail: findBook,
  editBook : editBook,
  addBook : addBook,
  deleteBook : deleteBook
});

export default allReducers;