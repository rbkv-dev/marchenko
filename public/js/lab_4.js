// const axios = require('axios');

function fetchData(param) {

  axios.get(`https://marchenko-sonya.herokuapp.com/photos/${param}`)
  .then(function (response) {
    console.log(response.response[0]);
    console.log(response.response[0].url);
    // response.json()
    // console.log(param);
    
  })
  // .then(json => {
    // console.log(json);
    // document.querySelector("#photo img").src = json.url
  // })
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