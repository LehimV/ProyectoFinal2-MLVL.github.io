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
              <p class="countryName fs-5 fw-bold">${obj.name.common}</p>
              <p class="countryPopulation m-0"><span class="fw-bold">Population: </span>${numConvertido}</p>
              <p class="countryRegion m-0"><span class="fw-bold">Region: </span>${obj.region}</p>
              <p class="countryCapital"><span class="fw-bold">Capital: </span>${obj.capital}</p>              
            </div>
          </div>       
          `;

  return div;
};

export default {
  $,
  newCard,
};
