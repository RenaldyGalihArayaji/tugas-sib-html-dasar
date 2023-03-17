
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    todoItem.innerHTML = `
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="todo-checkbox-${index}" ${todo.done ? "checked" : ""}>
        <label class="form-check-label ${todo.done ? "done" : ""}" for="todo-checkbox-${index}">${todo.text}</label>
      </div>
      <button type="button" class="close" aria-label="Delete">
        <span aria-hidden="true">&times;</span>
      </button>
    `;

  
    todoItem.querySelector(".close").addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    todoItem.querySelector(".form-check-input").addEventListener("change", () => {
      todo.done = !todo.done;
      todoItem.querySelector(".form-check-label").classList.toggle("done");
      saveTodos();
      });

      todoList.appendChild(todoItem);
    });
}


function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
    }
    
    todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoInput = todoForm.querySelector("#todo-input");
    const todoText = todoInput.value.trim();
    if (todoText) {
    todos.push({
    text: todoText,
    done: false,
    });
    saveTodos();
    renderTodos();
    todoInput.value = "";
    }
    });
    
 
    renderTodos();
    
    