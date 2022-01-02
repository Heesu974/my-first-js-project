const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoListWrap = document.querySelector("#todo-list");
let todos = [];

const storedLocal = localStorage.getItem("todo");
const saveTodos = () => {
    console.log(todos)
    localStorage.setItem("todo", JSON.stringify(todos));
}
const removeTodo = (e) => {
    const targetTodo = e.target.closest("li");
    console.log(targetTodo.id)

    console.log(todos)

    todos = todos.filter((item) => {
        if (item.id != targetTodo.id) {
            return true
        }
    })
    console.log(todos)
    targetTodo.remove();
    saveTodos();


}
const paintTodos = (todoArr) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = `👍`;
    li.id = todoArr.id;
    li.innerText = todoArr.text;
    li.appendChild(span);
    todoListWrap.appendChild(li)
    span.addEventListener("click", removeTodo);

}

const todoHandler = (e) => {
    e.preventDefault();
    const newTodo = todoInput.value;

    todoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    todos.push(newTodoObj);
    console.log(todos)

    paintTodos(newTodoObj);
    saveTodos();
    console.log(todos)

}




todoForm.addEventListener("submit", todoHandler);
if (storedLocal) {
    const parsedStoredLocal = JSON.parse(storedLocal);
    console.log(parsedStoredLocal);
    todos = parsedStoredLocal;
    parsedStoredLocal.forEach(element => {
        paintTodos(element)
    });
}

