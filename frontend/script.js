async function getPosts() {
  const request = await fetch("http://localhost:5000", {
    method: "GET",
  });
  const response = await request.text();
  const whereToPutRestTheResponse = document.querySelector("#responseBody");
  whereToPutRestTheResponse.innerHTML = response;
}

function getPostWithoutAsync() {
  fetch("http://localhost:5000", {
    method: "GET",
  })
    .then(function (request) {
      return request.text();
    })
    .then(function (response) {
      const whereToPutRestTheResponse = document.querySelector("#responseBody");
      whereToPutRestTheResponse.innerHTML = response;
    });
}

function getPostWithoutAsyncMuchBetter() {
  fetch("http://localhost:5000", {
    method: "GET",
  })
    .then((request) => {
      return request.text();
    })
    .then((response) => {
      const whereToPutRestTheResponse = document.querySelector("#responseBody");
      whereToPutRestTheResponse.innerHTML = response;
    });
}

document
  .querySelector("#loadPost")
  .addEventListener("click", getPostWithoutAsync);
