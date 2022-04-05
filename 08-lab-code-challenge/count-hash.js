const fetch = require("node-fetch");

const loadPets = async (url, onerror = (f) => f) =>
  await fetch("http://pet-library.moonhighway.com/api/pets")
    .then((res) => res.json())
    .catch(onerror);

async function main() {
  const pets = await loadPets();

  const countByCategory = pets.reduce((hash, pet) => {
    if (typeof hash[pet.category] === "number") {
      hash[pet.category] += 1;
    } else {
      hash[pet.category] = 0;
    }

    return hash;
  }, {});

  console.log(JSON.stringify(countByCategory, null, 2));
}

main();
