function fetchData(param) {
  fetch(`https://jsonplaceholder.typicode.com/photos/${param}`, { mode: 'no-cors'})
    .then(response => response.json())
    .then(json => {
      document.querySelector("#photo img").src=json.url
    })
}
fetchData(1)