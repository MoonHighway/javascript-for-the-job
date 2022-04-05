let divDot = document.getElementById("dot");
let counter = 0;
let divResults =
  document.getElementById("results");

divResults.innerText =
  "Click the dot. I'll count.";

divDot.onclick = function () {
  divResults.innerText = `You've clicked the dot ${++counter}`;
  divResults.innerText +=
    counter > 1 ? " times." : " time.";
};
