import {
    FIND_ALL_BOOKS,
    FIND_ALL_BOOKS_SUCCESS,
    FIND_ALL_BOOKS_ERROR,

    FIND_BOOK,
    FIND_BOOK_SUCCESS,
    FIND_BOOK_ERROR,

    EDIT_BOOK, 
    EDIT_BOOK_SUCCESS,
    EDIT_BOOK_ERROR,

    ADD_BOOK, 
    ADD_BOOK_SUCCESS,
    ADD_BOOK_ERROR,

    
    DELETE_BOOK, 
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_ERROR

} from '../actions/book';


export function findBook(state = { data: [], loading: false }, action) {
    switch (action.type) {
        case FIND_BOOK:
            return {
                ...state,
                data: null,
                loading: true
            };
        case FIND_BOOK_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case FIND_BOOK_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}

export function findAllBooks(state = { data: [], loading: false }, action) {
    switch (action.type) {
        case FIND_ALL_BOOKS:
            return {
                ...state,
                loading: true
            };
        case FIND_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case FIND_ALL_BOOKS_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
}
export function editBook(state={data : [], loading:false},action){
    console.log()
    switch (action.type){
        case EDIT_BOOK:
            return{
                ...state,
                loading:true,
                error:null
                
            };
        case EDIT_BOOK_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading:false,
                error:null
            };
        case EDIT_BOOK_ERROR:
            return{
                ...state,
                error: action.error,
                loading:false
            }
        default:
            return state;
        };
    }

    export function addBook(state={data : [], loading:false},action){
        console.log()
        switch (action.type){
            case ADD_BOOK:
                return{
                    ...state,
                    loading:true,
                    error:null
                    
                };
            case ADD_BOOK_SUCCESS:
                return {
                    ...state,
                    data: action.data,
                    loading:false,
                    error:null
                };
            case ADD_BOOK_ERROR:
                return{
                    ...state,
                    error: action.error,
                    loading:false
                }
            default:
                return state;
            };
        }
    
        export function deleteBook(state={data : null, loading:false},action){
            switch (action.type){
                case DELETE_BOOK:
                    return{
                        ...state,
                        data: [],
                        loading:true,
                        error:null
                        
                    };
                case DELETE_BOOK_SUCCESS:
                    return {
                        ...state,
                        data: action.data,
                        loading:false,
                    };
                case DELETE_BOOK_ERROR:
                    return{
                        ...state,
                        error: action.error,
                        loading:false
                    }
                default:
                    return state;
                }
            }