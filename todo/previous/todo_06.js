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
    toDos = parsedToDos;
    parsedToDos.forEach((paintToDo))
}
//브라우저를 새로고침했을 때, localstorage 에서 old 값은 사라지고, 새로운 값으로 대체되는 문제를 해결하자.
// 원인은 application이 시작될 때, 
// 위의 const toDos = [];에 의해, 
// toDos array는 항상 비어있기 때문이다. 
//그리고, newToDo 를 작성하고, form을 submit할때마다 
// 새로 입력되는 값 newTodo 를 toDos "비어있는 []"배열에 push하기 때문.
//해결방안 : application이 시작될 때 toDosarray를 빈 값 ([])으로 시작하는 대신에 

// const toDos = [] 를 업데이트 가능한 변수가 되도록 let으로 변경하고, 
// localStorage에 이미 toDo 가 존재하면, 
// 배열 toDos에 그때 생성된 parsedToDos를 넣어서 toDo 값을 복원 유지할것이다.