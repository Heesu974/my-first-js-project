const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN = 'hidden'


//유저가 이름을 제출하면 form이 사라지고, 유저에게 인사하는 것이 목적
function currentSubmit(event) {
    event.preventDefault();
    //브라우저의 기본 동작을 막고
    loginForm.classList.add(HIDDEN);
    //form을 숨기고
    const typedUsername = loginInput.value;
    //input에 타이핑되는 유저 이름을 변수로 저장하고
    greeting.innerText = `Hello ${typedUsername}`
    //h1이 보이도록
    greeting.classList.remove(HIDDEN)
    console.log(greeting)
}

// form은 숨기고 h1은 표시되도록


loginForm.addEventListener('submit', currentSubmit)
