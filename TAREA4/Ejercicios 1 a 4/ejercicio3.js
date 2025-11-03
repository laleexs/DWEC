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
        (index === 3) && Array.from(photo).map((element, index) =>{ // que cuando el indice sea igual al ultimo elemento del array del map y pase el el evento en alguna de las fotos
            element.addEventListener('click',() => removePhotos(index)); // entonces se da la condicion del evento y se llama a la funcion deletephotos mediante un click que es del ejercicio 4
        });
    }, element)
})