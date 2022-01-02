const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoListWrap = document.querySelector("#todo-list");
const writtenTodos = [];
const storedLocal = localStorage.getItem("todo")

const todoHandler = (newTodos) => {


    const typedTodo = todoInput.value;
    console.log(typedTodo);
    const li = document.createElement("li");
    const closeBtn = document.createElement("span");
    closeBtn.innerText = '👍';
    const todoList = {
        id: Date.now(),
        text: typedTodo
    }


    li.id = todoList.id;
    li.innerText = todoList.text;
    todoListWrap.appendChild(li);
    todoInput.value = ''
    li.appendChild(closeBtn)

    writtenTodos.push(li.outerHTML);
    console.log(writtenTodos)
    localStorage.setItem("todo", writtenTodos)

    newTodos = writtenTodos;
    console.log(newTodos)
}




if (storedLocal) {
    console.log(storedLocal.split(","))
    const splitedStoredLocal = storedLocal.split(",");
    splitedStoredLocal.forEach((item) => {
        todoListWrap.insertAdjacentHTML('beforeend', item)
    });

}

todoForm.addEventListener("submit", todoHandler(newTodos));


