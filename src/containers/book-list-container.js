import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withBookstoreService } from '../components/hoc';

import { fetchBooks, onAddedToCartAC } from '../actions';
import { compose } from '../utils';

import Spinner from '../components/spinner';
import ErrorIndicator from '../components/error-indicator';
import BookList from '../components/book-list';

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList }) => {
  return {
    books: bookList.books,
    loading: bookList.loading,
    error: bookList.error,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => dispatch(fetchBooks(bookstoreService)()),
    onAddedToCart: (bookId) => {
      dispatch(onAddedToCartAC(bookId));
    },
  };
};
export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookListContainer);
