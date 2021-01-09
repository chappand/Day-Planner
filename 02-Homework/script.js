// Standard business hour timeblock sit below the Current Day 
// Time blocks are color coded for past, present, and future
// Click into a time block and be able to enter an event 
// Click save on the time block to save event to local storage. The saved event should stay on the page even if the page is refreshed.
// Use moment.js for the date library


$(document).ready(function(){
// Store today's date and current hour in a variable to call on later
var thisDay = moment().format("dddd, MMM DD YYYY");
var rightNow = moment().format("HH");
// This JS adds today's date to the top of the planner
document.getElementById("currentDay").textContent=thisDay;

// var array????? = list of work hours?

// for(each hour){
//     append a row to the #container class;
//     create a div with the .hour id to hold the hour of the row;
//     create a div to hold the text area with .description id of the row;
//     create a button to save items with the .saveBtn id and saveBtn i:hover id;
// };
// if (hour selected is less than current hour use the .past class);
// if (hour selected is equal to current hour use the .present class);
// if (hour selected is greater than current hour use the .future class);

// on.click save information to localStorage;
// retrieve information from localStorage;

// Add new Row with Content
function rowContent() {

var taskRow = $("<row>").attr("class", "row");
var save = $("<button>SAVE</button>").attr("class", "saveBtn i:hover");
var taskHour = $("<div>").attr("class", "hour col-md-1");
var task = $("<textarea>").attr("class", "description col-md-9");


$("#planner").append(taskRow);
$(".row").append(taskHour);
$(".row").append(task);
$(".row").append(save);

};
rowContent();
});