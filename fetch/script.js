// Using the Revealing Module Pattern
const AppModule = (() => {

  const postsContainer = document.getElementById("posts-container");
  const todosContainer = document.getElementById("todos-container");
  const errorMessage = document.getElementById("error-message");

  const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
  const TODOS_API = "https://jsonplaceholder.typicode.com/todos";

  // Fetch Posts
  const fetchPosts = async () => {
    try {
      const response = await fetch(POSTS_API);
      if (!response.ok) throw new Error(`Error ${response.status}: Unable to fetch posts.`);
      const posts = await response.json();
      displayPosts(posts.slice(0, 5)); // Display first 5 posts for brevity
    } catch (error) {
      showError(error.message);
    }
  };

  // Display Posts in DOM
  const displayPosts = (posts) => {
    postsContainer.innerHTML = "";
    posts.forEach(post => {
      const div = document.createElement("div");
      div.classList.add("post");
      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(div);
    });
  };

  // Fetch Todos
  const fetchTodos = async () => {
    try {
      const response = await fetch(TODOS_API);
      if (!response.ok) throw new Error(`Error ${response.status}: Unable to fetch todos.`);
      const todos = await response.json();
      displayTodos(todos.slice(0, 5)); // Display first 5 todos
    } catch (error) {
      showError(error.message);
    }
  };

  // Display Todos in DOM
  const displayTodos = (todos) => {
    todosContainer.innerHTML = "";
    todos.forEach(todo => {
      const div = document.createElement("div");
      div.classList.add("todo");
      if (todo.completed) div.classList.add("completed");
      div.innerHTML = `
        <strong>${todo.title}</strong> <br>
        Status: ${todo.completed ? "✅ Completed" : "❌ Pending"}
      `;
      todosContainer.appendChild(div);
    });
  };

  // Error Handling
  const showError = (msg) => {
    errorMessage.textContent = `⚠ ${msg}`;
  };

  // Initialize App
  const init = () => {
    fetchPosts();
    fetchTodos();
  };

  // Publicly exposed methods
  return {
    init
  };

})();

// Initialize the module
document.addEventListener("DOMContentLoaded", AppModule.init);