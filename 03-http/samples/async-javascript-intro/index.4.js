function singTo({
  name,
  adjective,
  verb,
  chorus = f => f
}) {
  console.log(`la la la ${name}`);
  console.log(`${name} your so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
  chorus(name);
  console.log(`la la la ${name}`);
  console.log(`${name} your so ${adjective}`);
  console.log(`Can we ${verb} together forever?`);
  console.log(`la la la`);
  chorus(name);
  chorus(name);
}

const flo = {
  name: "Florence",
  adjective: "beautiful",
  verb: "do paperwork",
  chorus(name) {
    console.log(
      `Sha na na, ${name} you're a person I know!`
    );
  }
};

singTo(flo);
