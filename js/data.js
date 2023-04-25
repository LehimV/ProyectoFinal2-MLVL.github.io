/***** Obtener los datos del Api *****/

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  data.forEach((element) => {
    //console.log(element.capital);
  });
  return data;
};

/**** FILTRO SEARCH ****/
function filterSearchCountries(data, searchName) {
  const filteredData = data.filter((name) => {
    const countrySearch = name.name.common.toLowerCase();
    return countrySearch.includes(searchName.toLowerCase());
  });
  return filteredData;
}

/**** FILTRO DE REGIONES ****/
function filterRegion(data, region) {
  const filteredRegion = data.filter((country) => country.region === region);
  return filteredRegion;
}

export default {
  getData,
  filterSearchCountries,
  filterRegion,
};
