// VARIABLES

let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00"

// DISPLAY
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTitle.classList.add('active');
}

// START TIMER
function start() {
    // CHANGE BUTTON
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // CHANGE THE TIME
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // COUNTDOWN
    let timerFunction = () => {
        //CHANGE THE DISPLAY
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // START
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes = workMinutes - 1;
            if(workMinutes === -1) {
                if(breakCount % 2 === 0) {
                    // START BREAK
                    workMinutes = breakMinutes;
                    breakCount++

                    // CHANGE THE PAINEL
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');


                } else {
                    // CONTINUE WORK
                    workMinutes = workTime;
                    breakCount++

                    // CHANGE THE PAINEL
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');

                }
            }
            seconds = 59;
        }



    }

    // START COUNTDOWN
    setInterval(timerFunction, 1000); //1000 = 1s
}