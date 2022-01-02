const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoListWrap = document.querySelector("#todo-list");
let todos = [];
const storedLocal = localStorage.getItem("todo");


const removeTodo = (e) => {
    const targetTodo = e.target.closest("li");
    console.log(targetTodo.id);

    console.log(todos)
    todos = todos.filter((item) => {
        if (item.id != targetTodo.id) {
            return true
        }
    })
    targetTodo.remove();
    storeToLocal();
}

const storeToLocal = () => {
    //JS Obj를 string으로
    localStorage.setItem("todo", JSON.stringify(todos))
}


const paintTodos = (todoObj) => {
    const li = document.createElement("li");
    const closeBtn = document.createElement("span");
    li.id = todoObj.id;
    li.innerText = todoObj.text;
    todoListWrap.appendChild(li);
    closeBtn.innerText = '👍';
    li.appendChild(closeBtn);
    closeBtn.addEventListener("click", removeTodo);
}

const todoSubmitHandler = (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    todoInput.value = '';

    const todoObj = {
        text: inputValue,
        id: Date.now(),
    }
    paintTodos(todoObj);
    todos.push(todoObj);
    console.log(todos)
    storeToLocal();


}
if (storedLocal) {
    console.log(storedLocal, JSON.parse(storedLocal))
    const parsedStoredLocal = JSON.parse(storedLocal);
    todos = parsedStoredLocal;
    parsedStoredLocal.forEach(eachObj => paintTodos(eachObj));

}
todoForm.addEventListener("submit", todoSubmitHandler);