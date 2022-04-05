function* singTo({
  name,
  adjective,
  verb,
  chorus = f => f
}) {
  yield `la la la ${name}`;
  yield `${name} you're so ${adjective}`;
  yield `Can we ${verb} together forever?`;
  yield `la la la`;
  chorus(name);
  yield `la la la ${name}`;
  yield `${name} your so ${adjective}`;
  yield `Can we ${verb} together forever?`;
  yield `la la la`;
  chorus(name);
  chorus(name);
  yield { done: true };
}

const song = singTo({
  name: "Florence",
  adjective: "beautiful",
  verb: "do paperwork",
  chorus(name) {
    console.log(
      `Sha na na, ${name} you're a person I know!`
    );
  }
});

song.next();
const theSinging = setInterval(() => {
  const { value } = song.next();
  if (value.done) {
    clearInterval(theSinging);
    console.log("the singing has ended");
    return;
  }

  console.log(value);
}, 2000);
