const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');
const TODOSKEYNAME = 'todosKeyName';
let toDos = [];

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

//여기도 왜 (newTodo)인지 모르겠음 
function paintToDo(newTodoObj) {
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    // 왜 이(newTodo)의 .text인지 7분 08초 에서 설명
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
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
    toDos = parsedToDos;
    parsedToDos.forEach((paintToDo))
}
// 브라우져 화면에서 버튼을 눌러 lifmf 삭제해도, 저장된 localStorage에는 여전히 저장되어 있기때문에,
// 브라우저 새로고침 시, 브라우져에서 지웠던 item 들이 다시 생기는 문제 

// localstorage는 toDos array를 "복사"해두는 곳이다.외장하드처럼.

// array에 저장되는 item각각에 고유의 id를 부여해서, 
// 선택된 아이템이 무엇인지 확인가능하도록 만드는 작업이 필요하다.