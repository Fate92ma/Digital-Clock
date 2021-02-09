// Variables
let clock = document.getElementById("clock");

// Events
window.addEventListener("load", startTime);

/**************************************************************************************************/

// function to get time and display it 
function showTime() {

    let now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds();

    // add zeros

    if (hours < 10) hours = "0" + hours

    if (minutes < 10) minutes = "0" + minutes

    if (seconds < 10) seconds = "0" + seconds

    if (hours > 12) hours = hours - 12

    clock.innerText = `${hours} : ${minutes} : ${seconds}`

}

/**************************************************************************************************/

// function to update time
function startTime() {
    setInterval(showTime, 500)
}

/**************************************************************************************************/