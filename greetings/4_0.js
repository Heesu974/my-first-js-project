const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

//loginInput.value 값을 콘솔에 띄우기

function getInputValue() {
    console.log(loginInput.value);
}

loginButton.addEventListener('click', getInputValue)

//user가 이름을 입력했을 때만 button을 클릭할 수 있도록
