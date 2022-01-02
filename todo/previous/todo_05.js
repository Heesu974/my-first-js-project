const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');
const TODOSKEYNAME = 'todosKeyName';
const toDos = [];

//새로 고침할 때, toDos 가 localStorage에는 남아 있지만, 화면에는 나타나지 않는 문제점 해결. 

// todo List localStorage에 저장하기 
// localstage에는 string만 저장할 수 있다.
function saveToDos() {
    localStorage.setItem(TODOSKEYNAME, JSON.stringify(toDos));

}



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

    const newTodo = toDoInput.value;

    toDoInput.value = '';
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

// function sayHello(item) {
//     console.log('this is turn of', item);
// }

const savedToDos = localStorage.getItem(TODOSKEYNAME);
console.log(savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos)
    parsedToDos.forEach((item) => console.log('this is turn of', item))
}
// 각각의 배열 아이템에 함수를 실행시키기 위해서
//지금 내가 어떤 item을 사용하고 있는지 모른다면, 배열로의 변환은(JSON.parse) 무용지물.
// 조건문은 (savedToDos !==null)로도 쓰일 수 있다.