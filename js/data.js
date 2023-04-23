/*const getData = async (url) => {

  const data = fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((element) => {
        console.log(element.capital);
      });
    });

  return data;
};*/

// Obtener los datos del Api

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  data.forEach((element) => {
    //console.log(element.capital);
  });
  return data;
};

export default {
  getData,
};