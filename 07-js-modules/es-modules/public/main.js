import { inc, dec } from "./lib/count.js";
import Counter from "./lib/count-class.js";
import resetCounter, {
  inc as increment,
  dec as decrement,
} from "./lib/count-function.js";

inc();
inc();
inc();
inc();

console.log(dec());

const counter = new Counter();

counter.inc();
counter.inc();
counter.inc();

console.log(counter.count);

increment();
increment();
increment();

resetCounter();

console.log(decrement());
