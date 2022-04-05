//
// A function that causes side effects
//

const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

function selfEducate(person) {
  person.canRead = true;
  person.canWrite = true;
}

selfEducate(frederick);
console.log(frederick);

//
// A Pure Function
//

// const frederick = {
//   name: "Frederick Douglass",
//   canRead: false,
//   canWrite: false,
// };

// function selfEducate(person) {
//   return {
//     ...person,
//     canRead: true,
//     canWrite: true,
//   };
// }

// console.log(selfEducate(frederick));
// console.log(frederick);
