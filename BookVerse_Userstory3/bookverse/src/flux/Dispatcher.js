class Dispatcher {
  constructor() {
    this.listeners = [];
  }

  register(callback) {
    this.listeners.push(callback);
  }

  dispatch(action) {
    this.listeners.forEach(listener => listener(action));
  }
}

const dispatcherInstance = new Dispatcher();
export default dispatcherInstance;
