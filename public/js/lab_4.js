function fetchData(param) {
  fetch(`https://jsonplaceholder.typicode.com/photos/${param}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    console.log(response.json());
    response.json()
  })
  .then(json => {
    console.log(json);
    document.querySelector("#photo img").src=json.url
  })
}
fetchData(1)