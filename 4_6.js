const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN = 'hidden';
const STOREDKEY = 'storedKey';



//
//form을 보여주기 전에,
//event Listener가 실행되기 전에
//storage 에 저장된 내역을 파악해서 선택적으로 greeting 송출
function currentSubmit(event) {
    event.preventDefault();
    //브라우저의 기본 동작을 막고
    loginForm.classList.add(HIDDEN);
    //form을 숨기고
    const typedUsername = loginInput.value;
    //input에 타이핑되는 유저 이름을 변수로 저장하고
    localStorage.setItem(STOREDKEY, typedUsername)
    showGreeting(typedUsername);
}
function showGreeting(typedUsername) {
    greeting.innerText = `Hello ${typedUsername}`
    //h1이 보이도록
    greeting.classList.remove(HIDDEN)
}



//localStorage에 유저 정보의 유무 확인
const storedKeyElem = localStorage.getItem(STOREDKEY)
//저장된게 없다는 걸 파악하기 전까지 form과 h1을 모두 숨기자.(HTML에서)

if (storedKeyElem === null) {
    //저장된게 없으면,  form을 보여주고, event Listener를 실행

    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener('submit', currentSubmit);


} else {
    //저장된게 있으면, greeting을 보여주고
    // greeting.classList.remove(HIDDEN);
    // greeting.innerText = `안녕하세요 ${storedKeyElem}`
    showGreeting(storedKeyElem);
}
// 1. local storage에 유저정보가 있으면, 거기(storedKeyElem)에서 유저정보를 받아서 인자로 넣을 것.
// 그렇기 때문에 showGreeting(storedKeyElem);
// 여기서는 새로고침해서 들어가면 화면에 송출.


// 2. 만약 local storage에 유저정보가 없으면, form의 submit을 기다리기 위해 위의 함수 currentSubmit 으로 이동.
// input에 입력된 typedUsername 를 localstorage에 저장하고,

//     typedUsername 값을 greeting에 넣어서 submit을 누르면, 화면에 송출.