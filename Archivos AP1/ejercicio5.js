
let firstParagraph = document.getElementsByTagName("p")[0];
let secondParagraph = document.getElementsByTagName("p")[1];
let thirdParagraph = document.getElementsByTagName("p")[2];
let fourthParagraph = document.getElementsByTagName("p")[3];

firstParagraph.addEventListener("click", function() {
    firstParagraph.style.fontFamily = "Comic Sans MS";
    firstParagraph.style.fontSize = "20px";
    firstParagraph.style.fontWeight = "bold";
})

secondParagraph.addEventListener("click", function() {
    secondParagraph.style.fontFamily= "Comic Sans MS";
    secondParagraph.style.fontSize = "30px";
    secondParagraph.style.fontWeight = "bold";
})

thirdParagraph.addEventListener("click", function() {
    thirdParagraph.style.fontFamily = "Comic Sanz MS";
    thirdParagraph.style.fontSize = "40px";
    thirdParagraph.style.fontWeight = "bold";
})

fourthParagraph.addEventListener("click", function() {
    fourthParagraph.style.fontFamily = "Comic Sanz MS"; 
    fourthParagraph.style.fontSize = "50px";
    fourthParagraph.style.fontWeight = "bold";
})