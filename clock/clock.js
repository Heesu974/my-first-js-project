const clock = document.querySelector('#clock')

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}
getClock();
//브라우져가 새로고침되자마자 디폴트값을 현재시간으로 보일 수록있도록
setInterval(getClock, 1000);
// setInterval(sayHello, 5000);
// 호출되는 함수와, 그 함수가 몇초마다 실행되는 것을 원하는지.
//2초마다 실행되게 하고 싶을 떄.

//setTimeout(sayHello, 5000);
//sayHello() 이걸 몇 ms후에 실행시킬 건지.