
let paragraphs = document.getElementsByClassName("nutrition")[0];

let logo = document.getElementById("logo");

paragraphs.style.display = "none";

logo.addEventListener("click", function() {
    paragraphs.style.display = "inline-block";
});


