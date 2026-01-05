console.log("dateWidget.js");
// time
function clock() {
    let now = new Date();
    const theTime = now.toLocaleTimeString();
    document.querySelector('#showTime').innerHTML = theTime;
}
setInterval(clock, 1000);

// week
let now = new Date();
let startDate = new Date(now.getFullYear(), 0, 1);  
let daysInYear = Math.floor((now - startDate) / (24 * 60 * 60 * 1000)) + 1; // +1 to account Today

let week = Math.ceil(daysInYear / 7);

document.querySelector('#showWeek').innerHTML = "Week-" + week;

// date
let day = now.getDate();
let month = now.getMonth()+1;
let year = now.getFullYear();

document.querySelector('#showDate').innerHTML = day + "-" + month + "-" + year;