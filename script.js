const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const birthdate = document.querySelector("#birthdate").value;

  if (!name || !surname || !birthdate) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  const data = {
    name: name,
    surname: surname,
    birthdate: birthdate,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };

  fetch("https://jsonplaceholder.typicode.com/users", options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
});

