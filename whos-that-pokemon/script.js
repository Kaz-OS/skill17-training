const id = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

async function getData() {
  const url = `https://pokeapi.co/api/v2/pokemon/${id(1, 500)}`;
  const response = await fetch(url, { cache: "no-store" });
  const data = await response.json();
  return data;
}

const audio = document.querySelector("#pokemonSound");
const modal = document.querySelector("#modal-1");
const pokemonImg = document.querySelector(".pokemon-image");
const button = document.querySelector(".guess-submit");
const input = document.querySelector(".guess-value");
let pokemon = null;

document.addEventListener("DOMContentLoaded", async (event) => {
  audio?.play().catch(() => {});
  setTimeout(() => {
    modal?.classList.remove("hidden");
  }, 3000);
  pokemon = await getData();
  pokemonImg?.setAttribute("src", pokemon.sprites.other["official-artwork"].front_default);
  console.log(pokemon.name);
});

button.addEventListener("click", () => {
  if (pokemon === null) {
    return;
  }
  if (input.value !== pokemon.name) {
    input.value = "Faux";
    return;
  }
  pokemonImg.style.filter = "none";
  modal?.classList.add("hidden");
});
