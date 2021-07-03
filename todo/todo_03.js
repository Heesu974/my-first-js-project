const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

// event를 수신하고 있는 button을 만들어야 함. 
// 클릭 이벤트를 기다리고 있는 버튼
function deleteTodo(event) {

    const li = event.target.parentElement;
    li.remove();
    // 많은 버튼 중에 클릭한 버튼이 무엇일까 ?



}


function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newTodo;
    const button = document.createElement('button');
    button.innerText = '🥴'
    button.addEventListener('click', deleteTodo);



    li.appendChild(span);
    li.appendChild(button);


    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;

    toDoInput.value = '';
    paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);