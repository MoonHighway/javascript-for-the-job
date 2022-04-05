//
// Part One
//

function singTo(name, adjective, verb, chorus) {
  console.log(`la la la ${name}`);
  console.log(`${name} your so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
  chorus();
  console.log(`la la la ${name}`);
  console.log(`${name} your so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
  chorus();
  chorus();
}

function personIKnow() {
  console.log("Sha na na, you're a person I know!");
}

singTo(
  "Florence",
  "beautiful",
  "do paperwork",
  personIKnow
);

//
// Part Two
//

// singTo("Florence", "beautiful", "do paperwork", () =>
//   console.log("Sha na na, you're a person I know!")
// );
