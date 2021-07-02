const images = [
    '0.jpg',
    '1.jpg',
    '2.jpg'
]
const chosenImg = images[Math.floor(Math.random() * images.length)];

Math.random()은 0 과 1사이에서만 작동.
const bgImg = document.createElement('img');

bgImg.src = `img/${chosenImg}`;
console.log(bgImg);

document.body.appendChild(bgImg);