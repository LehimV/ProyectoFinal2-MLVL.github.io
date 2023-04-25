import data from "./data.js";
import dom from "./dom.js";

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

datos.forEach((element) => {
  const card = dom.newCard(element);
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

/**** Click filtro REGIONES FORM ****/
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

//
/*const formularioSearch_filter = (data) => {
  console.log(data);
  formSearch.addEventListener("keyup", async (e) => {
    e.preventDefault();

    const textForm = searchInput.value.toLowerCase();
    //console.log(textForm);

    const searchFiltrado = data.filter((item) => {
      const countryName = item.name.common.toLowerCase();
      if (countryName.indexOf(textForm) !== -1) {
        return item;
      }
    });
    dom.$("#countries").innerHTML = "";
    if (searchFiltrado.length === 0 && textForm !== "") {
      dom.$("#countries").innerHTML = "<p>No se encontraron resultados.</p>";
    } else {
      searchFiltrado.forEach((element) => {
        const card = dom.newCard(element);
        dom.$("#countries").appendChild(card);
      });
    }
  });
};

formularioSearch_filter(datos);*/
