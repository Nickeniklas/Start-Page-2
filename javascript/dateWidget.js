console.log("dateWidget.js");

// time
function clock() {
    let now = new Date();
    const theTime = now.toLocaleTimeString();
    document.querySelector('#showTime').innerHTML = theTime;
}
setInterval(clock, 1000);

// week
/*function getCalendarWeek() {
    let now = new Date();
    let oneJan = new Date(now.getFullYear(), 0, 1);
    
    // We calculate the number of days between now and Jan 1st, then adjust for the day of the week Jan 1st started on.
    let numberOfDays = Math.floor((now - oneJan) / (24 * 60 * 60 * 1000));
    
    // Result: This ensures that if the new week starts on Monday, 
    // the counter increments correctly even if 7 full days haven't passed.
    let week = Math.ceil((numberOfDays + oneJan.getDay() + 1) / 7);
    return week;
}

document.querySelector('#showWeek').innerHTML = "Week-" + getCalendarWeek();*/

function getCalendarWeekEU() {
    let now = new Date();
    // 1. Reset time to midnight to avoid DST or "partial day" math errors
    now.setHours(0, 0, 0, 0); 
    
    let oneJan = new Date(now.getFullYear(), 0, 1);
    
    // 2. Calculate days passed since Jan 1st
    let daysPassed = Math.floor((now - oneJan) / (86400000)); // 86400000 ms in a day
    
    // 3. Convert JS Day (Sun=0) to EU Day 
    let jan1DayNum = (oneJan.getDay() + 6) % 7;

    // 4. The Logic:
    return Math.ceil((daysPassed + jan1DayNum + 1) / 7);
}

document.querySelector('#showWeek').innerHTML = "Week-" + getCalendarWeekEU();


// date
let now = new Date(); // defined for the date section
let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();

document.querySelector('#showDate').innerHTML = day + "-" + month + "-" + year;