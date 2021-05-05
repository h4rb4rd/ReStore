import { cartActions } from '../reducers/shopping-cart';
import { booksActions } from '../reducers/book-list';

const booksLoadedAC = (newBooks) => {
  return {
    type: booksActions.FETCH_BOOKS_SUCCESS,
    payload: newBooks,
  };
};
const booksRequestedAC = () => {
  return {
    type: booksActions.FETCH_BOOKS_REQUEST,
  };
};
const booksErrorAC = (error) => {
  return {
    type: booksActions.FETCH_BOOKS_FAILURE,
    payload: error,
  };
};

// const fetchBooksOld = (bookstoreService, dispatch) => () => {
//   dispatch(booksRequestedAC());
//   bookstoreService
//     .getBooks()
//     .then((data) => dispatch(booksLoadedAC(data)))
//     .catch((error) => dispatch(booksErrorAC(error)));
// };
export const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequestedAC());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoadedAC(data)))
    .catch((error) => dispatch(booksErrorAC(error)));
};

export const onAddedToCartAC = (bookId) => {
  return {
    type: cartActions.ADDED_TO_CART,
    payload: bookId,
  };
};
export const bookRemoveFromCartAC = (bookId) => {
  return {
    type: cartActions.BOOK_REMOVE_FROM_CART,
    payload: bookId,
  };
};
export const allBooksRemoveFromCartAC = (bookId) => {
  return {
    type: cartActions.ALL_BOOKS_REMOVE_FROM_CART,
    payload: bookId,
  };
};
