const todoForm = document.querySelector("#todo-form");
const inputTodo = document.querySelector("#input-todo");
const ulTodo = document.querySelector("#ul-todo");

const getLocalTodo = JSON.parse(localStorage.getItem("todo"));

let arrTodo = [];

function onDeleteTodo(e) {
  const li = e.target.parentElement;

  li.remove();

  arrTodo = arrTodo.filter((list) => parseInt(li.id) !== list.id);

  localStorage.setItem("todo", JSON.stringify(arrTodo));
}

function onCreateList(todoObject) {
  const list = document.createElement("li");
  const button = document.createElement("button");

  list.id = todoObject.id;
  list.innerText = todoObject.todo;
  button.innerText = "삭제";
  arrTodo.push(todoObject);
  ulTodo.appendChild(list);
  list.appendChild(button);

  button.addEventListener("click", onDeleteTodo);
}

function onSubmitTodo(e) {
  e.preventDefault();
  const textTodo = inputTodo.value;
  inputTodo.value = "";
  const todoObject = {
    id: Date.now(),
    todo: textTodo,
  };
  onCreateList(todoObject);

  localStorage.setItem("todo", JSON.stringify(arrTodo));
}

if (getLocalTodo) {
  getLocalTodo.forEach((todo) => {
    onCreateList(todo);
  });
}

todoForm.addEventListener("submit", onSubmitTodo);
