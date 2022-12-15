// save reference to important DOM elements
var timeDisplayEl = $("#time-display");
var projectDisplayEl = $("#project-display");
var projectModalEl = $("#project-modal");
var projectFormEl = $("#project-form");
var projectNameInputEl = $("#project-name-input");
var projectTypeInputEl = $("#project-type-input");
var hourlyRateInputEl = $("#hourly-rate-input");
var dueDateInputEl = $("#due-date-input");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("DD MMM YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  var projectRowEl = $("<tr>");

  var projectNameTdEl = $("<td>").addClass("p-2").text(name);

  var projectTypeTdEl = $("<td>").addClass("p-2").text(type);

  var rateTdEl = $("<td>").addClass("p-2").text(hourlyRate);

  var dueDateTdEl = $("<td>").addClass("p-2").text(dueDate);

  var daysToDate =
    moment(dueDate, "MM/DD/YY").format("DDDD") - moment().format("DDDD");
  var daysLeftTdEl = $("<td>").addClass("p-2").text(daysToDate);

  var totalEarnings = hourlyRate * 8 * daysToDate;

  // You can also chain methods onto new lines to keep code clean
  var totalTdEl = $("<td>")
    .addClass("p-2")
    .text("$" + totalEarnings);

  var deleteProjectBtn = $("<td>")
    .addClass("p-2 delete-project-btn text-center")
    .text("X");

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  projectRowEl.append(
    projectNameTdEl,
    projectTypeTdEl,
    rateTdEl,
    dueDateTdEl,
    daysLeftTdEl,
    totalTdEl,
    deleteProjectBtn
  );

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal("hide");
}

function handleDeleteProject(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent("tr").remove();
}

// handle project form submission
function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val().trim();
  var hourlyRate = hourlyRateInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printProjectData(projectName, projectType, hourlyRate, dueDate);

  projectFormEl[0].reset();
}

projectFormEl.on("submit", handleProjectFormSubmit);
projectDisplayEl.on("click", ".delete-project-btn", handleDeleteProject);
dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);

// //Set time to display and run live
// var timeDisplayed = $("#time-display");

// console.log("hello");

// var currentDate = moment().format("MMM Do YY, LTS");
// timeDisplayed.text(currentDate);

// setInterval(function () {
//   currentDate = moment().format("MMM Do YY, LTS");
//   timeDisplayed.text(currentDate);
// }, 1000);

// //Setting datepicker
// $("#due-date-input").datepicker();

// //
// $(".btn custom-btn").on("submit", function () {});

// //----- Davider's version
// var timeDisplayEl = $(#time-display);

// function displayTime(){
// let rightNow=moment().format("DD MM YYYY (at) hh:mm:ss a")
// timeDisplayEl.text(rightNow)
// }

// setInterval(displayTime,1000);

// function HandleInput (event){
//     event.preventDefault()
//     let projectName=projectNameInputEl.val().trim()

// }
// dueDate
