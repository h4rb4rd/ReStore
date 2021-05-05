export const booksActions = {
  FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_REQUEST: 'FETCH_BOOKS_REQUEST',
  FETCH_BOOKS_FAILURE: 'BOOKS_ERROR',
};

const updateBookList = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case booksActions.FETCH_BOOKS_REQUEST:
      return {
        books: [],
        loading: true,
        error: null,
      };

    case booksActions.FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        loading: false,
        error: null,
      };

    case booksActions.FETCH_BOOKS_FAILURE:
      return {
        books: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.bookList;
  }
};

export default updateBookList;
