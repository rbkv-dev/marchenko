const axios = require('axios');

function fetchData(param) {

  axios.get(`https://jsonplaceholder.typicode.com/photos/${param}`)
  .then(function (response) {
    console.log(response.json());
    response.json()
  })
  .then(json => {
    console.log(json);
    document.querySelector("#photo img").src = json.url
  })
  .catch(function (error) {
    console.log(error);
  })
  // fetch(`https://jsonplaceholder.typicode.com/photos/${param}`, {
  //   method: "POST",
  //   mode: "cors",
  //   headers: {
  //     "Content-Type": "application/json; charset=utf-8",
  //   }
  // })
  // .then(response => {
  //   console.log(response.json());
  //   response.json()
  // })
  // .then(json => {
  //   console.log(json);
  //   document.querySelector("#photo img").src=json.url
  // })
}
fetchData(1)