const baseUrl = "https://crudcrud.com/api/";
const apiKey = "9ee35429743d4c7a9e93c3ec833ae2be";
const apiUrl = baseUrl + apiKey + "/todo";

const getTodoList = () => {
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    data.forEach(todo => {
      const todoItem = document.createElement('li');
      todoItem.classList.add('list-group-item');
      todoItem.innerText = todo.title;
      todoList.appendChild(todoItem);
    });
  });
};

getTodoList();

const form = document.querySelector('form');
form.addEventListener('submit', event => {
event.preventDefault();
const input = document.getElementById('todoInput');
const title = input.value;
if (title.trim() !== '') {
  const todo = {
    title: title
  };
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(response => response.json())
    .then(data => {
      getTodoList();
      input.value = '';
    });
}
});

