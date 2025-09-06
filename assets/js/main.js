const btn = document.querySelector(".btn");
const mensaje = document.querySelector(".mensaje");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  mensaje.textContent = "Cargando...";

  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la red");
      }
      return response.json();
    })
    .then((data) => {
      mensaje.textContent = `Nombre: ${data.name}, Email: ${data.email}`;
    })
    .catch((error) => {
      mensaje.textContent = "Error: no se pudo obtener la información.";
      mensaje.style.color = "#DC3545";
      console.error("Hubo un problema con la operación fetch:", error);
    });
});
