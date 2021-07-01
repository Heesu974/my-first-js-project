const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');


// submit event 가 발생했다는 것을 파악하고,
// 입력값은 받아내는 것을 목적
function currentSubmit(event) {
    event.preventDefault();
    console.log(event)
    // const username = loginInput.value;
    // console.log(username);
}


loginForm.addEventListener('submit', currentSubmit)
