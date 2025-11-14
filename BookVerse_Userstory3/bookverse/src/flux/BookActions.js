import Dispatcher from './Dispatcher';

export const BookActions = {
  addBook(book) {
    Dispatcher.dispatch({
      type: 'ADD_BOOK',
      payload: book
    });
  }
};
