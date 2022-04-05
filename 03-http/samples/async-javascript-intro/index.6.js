//
// Part One
//

function showtime() {
  console.log("Doug E. Fresh it's showtime!");
}

setTimeout(showtime, 6000);
console.log("6 seconds, Doug E. Fresh you're on!");

//
// Part Two
//
// const theTicking = setInterval(tick, 1000);

// function tick() {
//   const now = new Date();
//   console.log(now.toLocaleTimeString());
// }

//
// Part Three: Clearing Intervals
//

// const theTicking = setInterval(tick, 1000);

// function tick() {
//   const now = new Date();
//   console.log(now.toLocaleTimeString());
// }

// setTimeout(() => {
//   clearInterval(theTicking);
//   console.log("ticking has stopped");
// }, 5000);

//
// Part Four
//

// function tick() {
//     const now = new Date();
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(now.toLocaleTimeString());
//   }

//   process.stdin.on("data", () => {
//     process.exit();
//   });

//   console.log("Press (enter) to quit! \n\n");

//   tick();
//   setInterval(tick, 1000);
