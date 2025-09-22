let paragraphs = document.getElementsById("tablebot");
let button = document.getElementsByTagName("h1")[0];

paragraphs.style.display = "hidden";


button.addEventListener('click', function() {  
    
    if(paragraphs.style.display === "none") {
        paragraphs.style.display = "block";
    } else {
        paragraphs.style.display = "none";  
    }
});

