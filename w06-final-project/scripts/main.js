// Defining variables and elements
const workoutForm = document.getElementById('workoutForm');
const workoutInput = document.getElementById('workInput');
const timeInput = document.getElementById('time');
const dateInput = document.getElementById('date');
const workoutList = document.getElementById('workoutList');
const totalTimeDisplay = document.getElementById('totalTime');
const averageTimeDisplay = document.getElementById('averageTime');
const longestTimeDisplay = document.getElementById('longestTime');
const shortestTimeDisplay = document.getElementById('shortestTime');

// Define an array to store the  workouts
let logs = [];

// Define a function to add a workout log
function addLog(workInput, time, date) {
  const log = {
    workInput,
    time,
    date
  };

  logs.push(log);
}

// Define a function to display the workout logs
function displayLogs() {
  workoutList.innerHTML = '';

  logs.forEach(log => {
    const listItem = document.createElement('li');
    listItem.textContent = `${log.workInput} - ${log.time} minutes - ${log.date}`;
    workoutList.appendChild(listItem);
  });
}

// Define a function to calculate and display workout statistics
function calculateStatistics() {
  const totalTime = logs.reduce((total, log) => total + parseInt(log.time), 0);
  const averageTime = totalTime / logs.length || 0;
  const longestTime = Math.max(...logs.map(log => parseInt(log.time))) || 'None';
  const shortestTime = Math.min(...logs.map(log => parseInt(log.time))) || 'None';

  totalTimeDisplay.textContent = `Total Time: ${totalTime} minutes`;
  averageTimeDisplay.textContent = `Average Time: ${averageTime.toFixed(2)} minutes`;
  longestTimeDisplay.textContent = `Longest Time: ${longestTime} minutes`;
  shortestTimeDisplay.textContent = `Shortest Time: ${shortestTime} minutes`;
}

// Add an event listener to the button
workoutForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const workInput = workoutInput.value;
  const time = timeInput.value;
  const date = dateInput.value;

  addLog(workInput, time, date);
  displayLogs();
  calculateStatistics();

  workInput.value = '';
  timeInput.value = '';
  dateInput.value = '';
});

// Call the displayLogs() and calculateStatistics() functions on page load
displayLogs();
calculateStatistics();


//Footer

// declare and instantiate a variable to hold the current year for footer
const year = new Date().getFullYear();

// place the value of the current year variable into the index.html file inside of the element with an id of "year"
const yearElement = document.querySelector("#year");
yearElement.textContent = year;
