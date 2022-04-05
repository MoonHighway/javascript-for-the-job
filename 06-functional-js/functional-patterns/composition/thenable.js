//
// Fetch is available in the window, but needs to be loaded for node
//

try {
  fetch = window.fetch;
} catch (error) {
  var fetch = require("node-fetch");
}

fetch("https://randomuser.me/api/?results=100")
  .then(parseJSON)
  .then(pluckResults)
  .then(usaOnly)
  .then(trimUserData)
  .then(toString)
  .then(console.log);

function parseJSON(res) {
  return res.json();
}

function pluckResults({ results }) {
  return results;
}

function usaOnly(data) {
  return data.filter(({ location }) => location.country === "United States");
}

function trimUserData(data) {
  return data.map((user) => ({
    name: user.name,
    email: user.email,
    location: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
  }));
}

function toString(data) {
  return JSON.stringify(data, null, 2);
}
