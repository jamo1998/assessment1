window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  // GLOBAL VARIABLES
  let counter = 0;

  // DOM VARIABLES
  let addBtn = document.getElementById("add");
  let subtractBtn = document.getElementById("subtract");
  let countDisplay = document.getElementById("counter");
  let increment = document.getElementById("increment");

  countDisplay.innerText = `${counter}`;

  addBtn.addEventListener("click", () => {
    counter += parseInt(increment.value);
    // console.log(counter);
    if (counter < 0) {
      countDisplay.className = "red";
    } else {
      countDisplay.className = "";
    }
    countDisplay.innerText = `${counter}`;
  });

  subtractBtn.addEventListener("click", () => {
    counter -= parseInt(increment.value);
    // console.log(counter);
    if (counter < 0) {
      countDisplay.className = "red";
    } else {
      countDisplay.className = "";
    }
    countDisplay.innerText = `${counter}`;
  });
});
