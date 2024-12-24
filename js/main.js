'use strict'

const ball1 = {
    size: 100
}

function onBallClick(elBall, maxDiameter) {
    if (ball1.size < maxDiameter) {

        ball1.size += getRandomInt(20, 60)

        elBall.style.backgroundColor = getRandomColor()

        elBall.style.width = ball1.size + 'px'
        elBall.style.height = ball1.size + 'px'
        elBall.innerText = ball1.size
    }
    else {
        ball1.size = 100
    }

    // if (ball1.size >= maxDiameter) ball1.size = 50
}

