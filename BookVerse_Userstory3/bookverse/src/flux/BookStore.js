import Dispatcher from './Dispatcher';
import axios from 'axios';

class BookStore {
  constructor() {
    this.books = [];
    this.listeners = [];
    Dispatcher.register(this.handleActions.bind(this));

    axios.get('http://localhost:5000/books')
      .then(res => {
        this.books = res.data;
        this.emitChange();
      })
      .catch(err => console.error(err));
  }

  handleActions(action) {
    switch(action.type) {
      case 'ADD_BOOK':
        this.books.push(action.payload);
        this.emitChange();
        break;
      default:
        break;
    }
  }

  emitChange() {
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  getBooks() {
    return this.books;
  }
}

const bookStoreInstance = new BookStore();
export default bookStoreInstance;
