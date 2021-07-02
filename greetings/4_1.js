const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

//loginInput.value 값을 콘솔에 띄우기

function getInputValue() {
    const username = loginInput.value;
    //input에 입력되는 값 = username
    if (username === "") {
        alert('please write your name')
    } else if (username.length > 15) {
        alert('your name is too long')
    }
}

loginButton.addEventListener('click', getInputValue)

//username 의 유효성을 검사하기 위한 
//user가 이름을 입력했을 때만 button을 클릭할 수 있도록,

