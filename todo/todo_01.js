const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');


function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    // 이 시점에서 inpur의 value 값을 newTodo에 복사한 상태라서,
    // 아래의 toDoInput.vlaue=''; 가 실행되도, newTodo에는 영향이 없다. 
    toDoInput.value = '';
}

toDoForm.addEventListener('submit', handleToDoSubmit);