//tiempos 3.7 - 4 - 4.4 -4.8 segundos
//opacidad 50-100
//ancho alto 100 y 105%

const changePhotos = (opacity, dimensions) => {
    Array.from(photo).map((element, index) =>{
     element.style.opacity = opacity;
     element.style.height = dimensions;   // alto
     element.style.width = dimensions; // ancho 
    })
}

[3700, 4000, 4400, 4800].map((element, index) => {
    setTimeout(() =>{
        (index % 2 === 0) ? changePhotos('50%', '105%'): changePhotos('100%', '100%'); // al ser un operador ternario no lleva el if , si se da la condicion lo primero si no, lo segundo

        
    }, element)
})