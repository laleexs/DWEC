
let paragraph = document.getElementsByClassName("nutrition")[0];

let logo = document.getElementsByTagName("img")[0];

paragraph.style.display = "none";

logo.addEventListener('click', function() {
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block"; // mostrar la lista
  } else {
    paragraph.style.display = "none";  // ocultar la lista
  }
});

// segun el profesor el script esta correcto pero mi navegador no oculta la clase nutrition


