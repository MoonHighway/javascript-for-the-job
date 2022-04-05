const Counter = require("./lib/counter");
const counter = new Counter();

counter.inc();
counter.inc();
counter.inc();
counter.inc();

counter.dec();
console.log(counter.count);
