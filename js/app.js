import data from "./data.js";
import dom from "./dom.js";

const URL = "https://restcountries.com/v3.1/all";
const datos = await data.getData(URL);
const html = document.querySelector("html");
console.log(html.dataset);
const darkBtn = document.querySelector("#btn-darkMode");
darkBtn.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "dark" ? "light" : "dark";
});

datos.forEach((element) => {
  const card = dom.newCard(element);
  dom.$("#countries").appendChild(card);
});
