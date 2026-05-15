async function getData() {
  const url = "https://api.adviceslip.com/advice";
  const response = await fetch(url, { cache: "no-store" });
  const data = await response.json();
  return data.slip;
}

const button = document.querySelector(".button");
const title = document.querySelector(".title");
const text = document.querySelector(".text");

button.addEventListener("click", async () => {
  const data = await getData();
  title.textContent = "ADVICE #" + data.id;
  text.textContent = '"' + data.advice + '"';
});
