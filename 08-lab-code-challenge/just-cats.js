const fetch = require("node-fetch");

const loadPets = async (url, onerror = (f) => f) =>
  await fetch("http://pet-library.moonhighway.com/api/pets")
    .then((res) => res.json())
    .catch(onerror);

async function main() {
  const pets = await loadPets();

  const cats = pets.filter((pet) => pet.category === "CAT");

  console.log("cats: ", cats.map((pet) => pet.name).join(", "));
}

main();
