function fetchData(param) {
  fetch(`https://jsonplaceholder.typicode.com/photos/${param}`, { mode: 'no-cors'})
    .then(response => {
      console.log(response.json());
      
      response.json()
    })
    .then(json => {
      console.log(json;
      document.querySelector("#photo img").src=json.url
    })
}
fetchData(1)