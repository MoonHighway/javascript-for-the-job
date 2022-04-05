const fetch = require("node-fetch");

const loadPets = async (url, onerror = (f) => f) =>
  await fetch("http://pet-library.moonhighway.com/api/pets")
    .then((res) => res.json())
    .catch(onerror);

async function main() {
  const pets = await loadPets();

  const totalInPets = pets.reduce((total, pet) => total + pet.weight, 0);

  console.log(totalInPets);
}

main();
