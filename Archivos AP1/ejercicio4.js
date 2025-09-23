
let paragraphs = document.getElementsByClassName("nutrition")[0];

let logo = document.getElementsByTagName("img")[0];

paragraphs.style.display = "none";

logo.addEventListener('click', function() {
  if (paragraphs.style.display === "none") {
    paragraphs.style.display = "block"; // mostrar la lista
  } else {
    paragraphs.style.display = "none";  // ocultar la lista
  }
});

// segun el profesor el script esta correcto pero mi navegador no oculta la clase nutrition


