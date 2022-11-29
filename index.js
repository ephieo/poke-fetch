import fetch from "node-fetch";

function fetchPoke(pokeName) {
  let name;
  let data;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((response) => response.json())
    .then((res) => {
      fetch(`https://pokeapi.co/api/v2/characteristic/${res.id}`)
        .then((response) => response.json())
        .then((res) =>
          console.log(`${pokeName} is`, res.descriptions[7].description)
        )
        .catch((error) => error);
    })
    .catch((error) => error);

  if (data === undefined) {
    console.log("loading Pokemon interesting fact... \n");
  } else if (!data) {
    console.log("Error no Pokemon found Try Again :)");
  } else {
    console.log(`${pokeName}'s Abilities : \n ${data}`);
  }
}

fetchPoke("pikachu");
