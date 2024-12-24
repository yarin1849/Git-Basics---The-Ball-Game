'use strict'

const ball1 = {
    size: 100
}

function onBallClick(elBall) {
    ball1.size += getRandomInt(20, 60)
    console.log(ball1.size);

    elBall.style.width = ball1.size + 'px'
    elBall.style.height = ball1.size + 'px'
    elBall.innerText = ball1.size

    if (ball1.size >= 400) ball1.size = 50
}

