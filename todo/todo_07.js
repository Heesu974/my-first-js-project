const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');
const TODOSKEYNAME = 'todosKeyName';
let toDos = [];


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
// forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행한다.
// item을 지우는게 아니라 지우고 싶은 item을 제외한 array를 새로 생성한다.
// function sexyfilter() {

// }
// [1, 2, 3, 4].filter(sexyfilter) 일때,
//     js는 sexyfilter(1)
// sexyfilter(2)
// 이렇게 각각의 item에서 각각 한 번씩 작동한다.
// filter함수는 무조건 true 값만 보여준다.

// ==array 의 item을 유지하고 싶으면, true를 리턴해야된다.
