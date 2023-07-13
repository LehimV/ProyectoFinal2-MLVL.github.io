/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = (selector) => document.querySelector(selector);

const newCard = (obj) => {
  let num = obj.population;
  let numConvertido = num.toLocaleString();
  //console.log(num.toLocaleString());

  const div = document.createElement("div");
  div.className = "col";
  div.innerHTML = `    
      
          <div id="container-card" class="card w-100 shadow mt-2">
            <div id="containerImg">
              <img id="imgCountry" src="${obj.flags.svg}" class="imgCard card-img-top" alt="${obj.name.common}, flag" />
            </div>
            <div class="card-body mt-3 ms-4">
              <p type="button" id="countryName" class="countryName btn border-0 p-0 fs-5 fw-bold"
                 data-bs-toggle="modal" data-bs-target="#countriesModal">
                 ${obj.name.common}</p>
              <p class="countryPopulation m-0"><span class="fw-bold">Population: </span>${numConvertido}</p>
              <p class="countryRegion m-0"><span class="fw-bold">Region: </span>${obj.region}</p>
              <p class="countryCapital"><span class="fw-bold">Capital: </span>${obj.capital}</p>              
            </div>
          </div>       
          `;

  return div;
};

/***** Actualizar DOM de las regiones*****/
const updateRegions = (text) => {
  dom.$("#selectRegion").textContent = text;
};

/*MODAL */
const infoModal = (obj) => {
  let num = obj.population;
  let numConvertido = num.toLocaleString();
  console.log(num.toLocaleString());

  const div = document.createElement("div");
  div.className = "modalCard";
  div.innerHTML = `    
      
                <div class="card border-0 m-auto mb-3" style="max-width: 88%">
                  <div class="row g-0">
                    <div class="col-md-6">
                      <img
                        id="modalFlag"
                        src="${obj.flags.svg}"
                        class="d-flex m-auto w-100"
                        alt="Country Flag"
                      />
                    </div>
                    <div class="col-md-6">
                      <div class="card-body row mt-5 ms-0">
                        <div class="col">
                          <p class="m_c_name fs-3 fw-bold">${obj.name.common}</p>
                          <p class="m_c_native">
                            <span class="fw-bold">Native Name: </span>${obj.nativeName}
                          </p>

                          <p class="m_c_popula">
                            <span class="fw-bold">Population: </span>${numConvertido}
                          </p>

                          <p class="m_c_region">
                            <span class="fw-bold">Region: </span>${obj.region}
                          </p>

                          <p class="m_c_subRegion">
                            <span class="fw-bold">Sub Region: </span>${obj.subregion}
                          </p>

                          <p class="m_c_capital">
                            <span class="fw-bold">Capital: </span>${obj.capital}
                          </p>
                        </div>
                        <div class="col">
                          <p class="m_c_lvlDomain">
                            <span class="fw-bold">Top Level Domain: </span>${obj.topLevelDomain}
                          </p>

                          <p class="m_c_currencies">
                            <span class="fw-bold">Currencies: </span>${obj.currencies.name}
                          </p>

                          <p class="m_c_lang">
                            <span class="fw-bold">Languages: </span>${obj.languages.name}
                          </p>
                        </div>
                        <footer id="borderCountries" class="container mt-4">
                          <p class="fw-bold me-1">Border Countries:</p>

                          <buttton type="button" id="btnBorders1" class="btnBorders btn shadow"
                            >${obj.borders}</buttton
                          >
                          <buttton type="button" id="btnBorders2" class="btnBorders btn shadow"
                            >${obj.borders}</buttton
                          >
                          <buttton type="button" id="btnBorders3" class="btnBorders btn shadow"
                            >${obj.borders}</buttton
                          >
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
                  
          `;

  return div;
};

export default {
  $,
  newCard,
  updateRegions,
  infoModal,
};
