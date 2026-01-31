var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];

function updateClock() {

    var dateObject = new Date();

    var day = dateObject.getDay();
    var date = dateObject.getDate();
    var month = dateObject.getMonth();
    var year = dateObject.getFullYear();

    document.getElementById("day-name").innerText = days[day];
    document.getElementById("full-date").innerText =
        date + " " + months[month] + " " + year;


    var hours = dateObject.getHours();  
    var minutes = dateObject.getMinutes();
    var seconds = dateObject.getSeconds();
    var ampm = "AM";


    if (hours >= 12) {
        ampm = "PM";
    }


    if (hours == 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours = hours - 12;
    }


    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    document.getElementById("hours").innerText = hours;
    document.getElementById("min").innerText = minutes;
    document.getElementById("sec").innerText = seconds;
    document.getElementById("ampm").innerText = ampm;
}


setInterval(updateClock, 1000);
updateClock();
