let paragraphs = document.getElementsByTagName("h1")[0]; // selecionamos el h1 que queremos en este caso 
                                                        // el [0], porque podria haber más

paragraphs.addEventListener('mouseover', function() {  // raton sobre el titulo
    paragraphs.textContent = "Tu var para almorzar";
});

paragraphs.addEventListener('mouseleave', function() { // raton se va del titulo
    paragraphs.textContent = "Casa Pepe";
})