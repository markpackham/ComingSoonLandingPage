const countdown = document.querySelector('.countdown');

//Set launch date, getTime() gives us the miliseconds (ms)
const launchDate = new Date('Jan 1, 2019 13:00:00').getTime();

// update every second (1000ms = 1 second)
let interval = setInterval(() => {
    //Get today's date & time in (ms)
    let now = new Date().getTime();

    //Distance from now to launch date
    let distance = launchDate - now;

    //Calculate time (floor rounds down)
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((distance % (1000 * 60)) / 1000);

    //Display result
    countdown.innerHTML = `
    <div>${days}<span> days</span></div>
    <div>${hours}<span> hours</span></div>
    <div>${mins}<span> mins</span></div>
    <div>${secs}<span> secs</span></div>
    `;

    //If launch date passed
    if (distance < 0) {
        //Stop countdown
        clearInterval(interval);
        //Style output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched';
    }

}, 1000);