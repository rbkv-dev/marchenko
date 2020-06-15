function fetchData(param) {
  axios.get(`https://marchenko-sonya.herokuapp.com/photos/${param}`)
  .then(function (response) {
    document.querySelector("#photo img").src = response.data[0].url;
  })
  .catch(function (error) {
    console.log(error);
  })
}
fetchData(1)