import dom from "./dom.js";
import data from "./data.js";

const URL = "https://restcountries.com/v3.1/all";
const datos = await data.getData(URL);
const html = document.querySelector("html");
console.log(html.dataset);
const darkBtn = document.querySelector("#btn-darkMode");
const darkBtn2 = document.querySelector("#btn2-darkMode");
darkBtn.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "dark" ? "light" : "dark";
});
darkBtn2.addEventListener("click", () => {
  html.dataset.bsTheme = html.dataset.bsTheme == "dark" ? "light" : "dark";
});

/******* INSERCIÓN DE CARDS *******/
//--Inserta las cards de los Paises
/*
datos.forEach((element) => {
  const card = dom.newCard(element);
  dom.$("#countries").appendChild(card);
});*/

datos.forEach((element) => {
  const card = dom.newCard(element);
  card.addEventListener("click", () => {
    const modalContent = dom.infoModal(element);
    dom.$("#bodyCardModal").innerHTML = "";
    dom.$("#bodyCardModal").appendChild(modalContent);
    //dom.showModal();
  });
  dom.$("#countries").appendChild(card);
});

/**** FILTRO SEARCH FORM ****/
const formSearch = document.querySelector("#formCountrySearch");
const searchInput = document.querySelector("#countrySearch");

formSearch.addEventListener("keyup", async (e) => {
  e.preventDefault();

  const searchName = searchInput.value;
  const filteredData = data.filterSearchCountries(datos, searchName);
  dom.$("#countries").innerHTML = "";
  filteredData.forEach((element) => {
    const card = dom.newCard(element);
    dom.$("#countries").appendChild(card);
  });
});

/**** Evento Click para el filtro de REGIONES FORM ****/
const selectRegion = dom.$("#selectRegion");
const regiones = dom.$("#regiones");

selectRegion.addEventListener("click", () => {
  regiones.classList.toggle("dropdown");
});

regiones.addEventListener("click", async (e) => {
  e.preventDefault();
  const region = e.target.textContent;
  const filteredRegion = data.filterRegion(datos, region);

  //modifica el dom de las regiones
  // dom.updateRegions(region);
  dom.$("#countries").innerHTML = "";
  filteredRegion.forEach((element) => {
    const card = dom.newCard(element);
    dom.$("#countries").appendChild(card);
  });
});

//MODAL
