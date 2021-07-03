const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');
const toDos = [];
//새로운 newtodo가 그려질때마다, paint될때마다, 이 배열(array)에 추가(push)하기위해.

// todo List localStorage에 저장하기 
// localstage에는 string만 저장할 수 있다.
function saveToDos() {
    localStorage.setItem('todosKeyName', JSON.stringify(toDos));

    //     ##################

    //     여기까지는 단순히!!!!
    //     array를 만들어줄 형식 (string이라는 조건과,
    //         [] 조건)
    //         을 맞춰 주었을 뿐 실제로 배열이 되거나 배열로써 사용할 수 없다. 
    //         이를, 배열로 사용하기 위해서는 뒤에서 배울,
    //         JSON.parse 기능을 거쳐야 한다. 

    // ######################
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
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;

    toDoInput.value = '';
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);