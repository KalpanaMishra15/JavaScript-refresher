let timer;
let totalTime = 0;
let isPaused = false;

const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function updateDisplay(time) {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    display.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (isPaused) {
        isPaused = false; 
    } else {
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        totalTime = minutes * 60 + seconds;
    }
    if (totalTime > 0) {
        timer = setInterval(() => {
            if (totalTime > 0) {
                totalTime--;
                updateDisplay(totalTime);
            } else {
                clearInterval(timer);
                display.textContent = "ee:ee"; 
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (timer) {
        clearInterval(timer);
        isPaused = true;
    }
}

function resetTimer() {
    clearInterval(timer);
    totalTime = 0;
    isPaused = false;
    minutesInput.value = '';
    secondsInput.value = '';
    display.textContent = '00:00';
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
