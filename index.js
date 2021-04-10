/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let current_time = time.split(":");
  let another_time = current_time[0].concat(current_time[1]);
  let factored_time = parseInt(another_time, 10);
  if (factored_time < 1200) {
    return "Good Morning";
  } 
  else if (factored_time > 1700) {
    return "Good Evening";
  } 
  else {
    return "Good Afternoon";
  }
};

/* Write your implementation of displayMessage() */
function displayMessage() {
  document.getElementById('greeting').innerText = 'TEST';
};
