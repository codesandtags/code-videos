// Short Circuit Evaluation
// JavaScript reads from left to right
const todayIsHoliday = true;

function letsRun() {
  console.log('Yeyy lets run 🏃‍♂️🏃‍♀️');
}

// Before
if (todayIsHoliday) {
  letsRun();
}

// After
todayIsHoliday && letsRun();



// Table's Truth
// https://i.stack.imgur.com/nl0W8.jpg