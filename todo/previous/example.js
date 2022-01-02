const session = {
    'screens': [],
    'state': true
};

session.screens.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
session.screens.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
session.screens.push({ 'name': 'screenC', 'width': 750, 'height': 120 })
console.log(session)

localStorage.setItem('session', JSON.stringify(session))

const getSession = localStorage.getItem("session");

console.log(getSession);

const getParsedSession = JSON.parse(localStorage.getItem("session"));

console.log(getParsedSession);
