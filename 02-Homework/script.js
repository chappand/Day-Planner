// Current Day populates at the top of the calendar when page is opened.
// Standard business hour timeblock sit below the Current Day 
// Time blocks are color coded for past, present, and future
// Click into a time block and be able to enter an event 
// Click save on the time block to save event to local storage. The saved event should stay on the page even if the page is refreshed.
// Use moment.js for the date library


// This JS adds today's date to the top of the planner
document.getElementById("currentDay").textContent=moment().format("dddd, MMM DD YYYY");

