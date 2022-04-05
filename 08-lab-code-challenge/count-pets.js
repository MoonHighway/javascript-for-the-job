const fetch = require("node-fetch");

const loadPets = async (url, onerror = (f) => f) =>
  await fetch("http://pet-library.moonhighway.com/api/pets")
    .then((res) => res.json())
    .catch(onerror);

const byCategory = (category) => (pet) => pet.category === category;

async function main() {
  const pets = await loadPets();

  const totalPets = pets.length;
  const totalCats = pets.filter(byCategory("CAT")).length;
  const totalDogs = pets.filter(byCategory("DOG")).length;
  const remainingPets = totalPets - totalCats - totalDogs;

  console.log("total pets: ", totalPets);
  console.log("dogs: ", totalDogs);
  console.log("cats: ", totalCats);
  console.log("other: ", remainingPets);
}

main();
