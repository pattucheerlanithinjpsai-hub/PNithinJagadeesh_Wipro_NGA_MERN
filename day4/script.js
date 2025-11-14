const AppModule = (function () {
  const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
  const todosEndpoint = 'https://jsonplaceholder.typicode.com/todos';

  const postContainer = document.getElementById('postContainer');
  const todoContainer = document.getElementById('todoContainer');
  const errorContainer = document.getElementById('error');
  const displayPostsBtn = document.getElementById('displayPostsBtn');
  const displayTodosBtn = document.getElementById('displayTodosBtn');

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: '${response.status}'`);
      return await response.json();
    } catch (error) {
      displayError(`Failed to fetch data from ${url}: ${error.message}`);
      return null;
    }
  }

  function displayPosts(posts) {
    postContainer.innerHTML = '';
    posts.slice(0, 10).forEach(post => {
      const li = document.createElement('li');
      li.textContent = post.title;
      postContainer.appendChild(li);
    });
  }

  function displayTodos(todos) {
    todoContainer.innerHTML = '';
    todos.slice(0, 10).forEach(todo => {
      const li = document.createElement('li');
      li.textContent = `${todo.title} ${todo.completed ? '✔' : '❌'}`;
      todoContainer.appendChild(li);
    });
  }

  function displayError(message) {
    errorContainer.textContent = message;
  }

  async function loadPosts() {
    const posts = await fetchData(postsEndpoint);
    if (posts) displayPosts(posts);
  }

  async function loadTodos() {
    const todos = await fetchData(todosEndpoint);
    if (todos) displayTodos(todos);
  }

  function init() {
    displayPostsBtn.addEventListener('click', loadPosts);
    displayTodosBtn.addEventListener('click', loadTodos);
  }

  return {
    init
  };
})();

AppModule.init();