let paragraphs = document.getElementById("tablebot");
let button = document.getElementsByTagName("h1")[0];

paragraphs.style.display = "none";


button.addEventListener('click', function() {  
    
    if(paragraphs.style.display === "none") {
        paragraphs.style.display = "block";
    } else {
        paragraphs.style.display = "none";  
    }
});

