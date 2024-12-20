const monthsIndex = new Date().getMonth();
const month = document.querySelector(".date h1");
const FullDate = document.querySelector(".date p");
const daysElement = document.querySelector(".days");
const lastDay = new Date(
  new Date().getFullYear(),
  monthsIndex + 1,
  0
).getDate(); // Last day of the current month

const firstDay = new Date(new Date().getFullYear(), monthsIndex, 1).getDay(); // Weekday index of the first day of the month

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Set month and full date
month.innerHTML = months[monthsIndex];
FullDate.innerHTML = new Date().toDateString();

let days = "";

// Add empty divs for days before the first day
for (let i = 0; i < firstDay; i++) {
  days += `<div class="empty"></div>`;
}

// Add days of the month
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate() && monthsIndex === new Date().getMonth()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

// Render the days in the calendar
daysElement.innerHTML = days;
