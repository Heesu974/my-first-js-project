const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN = 'hidden'


//value 값을 저장하자.
function currentSubmit(event) {
    event.preventDefault();
    //브라우저의 기본 동작을 막고
    loginForm.classList.add(HIDDEN);
    //form을 숨기고
    const typedUsername = loginInput.value;
    //input에 타이핑되는 유저 이름을 변수로 저장하고
    localStorage.setItem('storedKey', typedUsername)
    greeting.innerText = `Hello ${typedUsername}`
    //h1이 보이도록
    greeting.classList.remove(HIDDEN)
    console.log(greeting)
}

// form은 숨기고 h1은 표시되도록


loginForm.addEventListener('submit', currentSubmit)
