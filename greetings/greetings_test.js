const usernameInput = document.querySelector("input[name='username']");

const loginForm = document.querySelector("form#login-form");

const greeting = document.querySelector("h1#greeting");

const savedUser = localStorage.getItem('username');

const saveUserHandler = () => {


    const username = usernameInput.value;
    console.log(username)

    localStorage.setItem("username", username);

}
const paintGreetings = (savedUser) => {

    greeting.classList.remove("hidden");
    greeting.innerHTML = `Hello ${savedUser}`;
    loginForm.classList.add("hidden")


}

if (savedUser === null) {
    console.log("no savedUser")
    loginForm.classList.remove("hidden")

    loginForm.addEventListener("submit", saveUserHandler)
} else {
    console.log(savedUser)
    paintGreetings(savedUser);
    ;
}




