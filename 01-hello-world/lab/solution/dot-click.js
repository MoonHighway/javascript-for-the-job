let divDot = document.getElementById("dot"),
  divResults = document.getElementById("results"),
  counter = 0;

divResults.innerText = "Click the dot, I'll count.";

divDot.onclick = function () {
  divResults.innerText = `You've clicked the dot ${++counter}`;
  divResults.innerText += counter > 1 ? " times" : " time";
};
