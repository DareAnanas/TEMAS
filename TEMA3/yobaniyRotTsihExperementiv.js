let startBtn = document.querySelector('.btn')
let ball = document.querySelector('.ball')

function animate(timing,draw,duration
) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {

        // timeFraction змінюється від 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;


        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}

function start() {
    function bounce(timeFraction) {
        for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
            if (timeFraction >= (7 - 4 * a) / 11) {
                return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
            }
        }
    }

    function back(x, timeFraction) {
        return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
    }

    function circ(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
    }

    function quad(timeFraction) {
        return Math.pow(timeFraction, 2)
    }

    function linear(timeFraction) {
        return timeFraction
    }

    function draw(progress) {
        ball.style.top = progress * 100 + 'px';
    }
    animate(bounce, draw, 1000);
}


startBtn.addEventListener('click', start)