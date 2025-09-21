// Varios ejemplos de eventos, empleando varios selectores:

// Seleccionamos el primer párrafo con getElementById y le aplicamos con addEventListener el manejador
// de eventos 'click' para que cada vez que el usuario realice click sobre este párrafo, se cambie el texto.
let firstParagraph = document.getElementById('parrafoUno');

firstParagraph.addEventListener('click', function () {
    this.innerText = 'Hemos cambiado el párrafo.';
});

// Ahora seleccionamos el segundo párrafo con otro selector -getElementsByTagName y le implementamos un 
// evento doble click -dblclick-.

let secondParagraph = document.getElementsByTagName('p')[1];

secondParagraph.addEventListener('dblclick', function () {
    this.innerHTML = 'Hemos cambiado el párrafo.';
});

// Volvemos a utilizar getElementById y esta vez implementamos el evento mouseover:

let thirdParagraph = document.getElementById('parrafoTres');

thirdParagraph.addEventListener('mouseover', function () {
    this.innerHTML = 'Hemos cambiado el párrafo.';
});

// Ahora implementamos mouseout, para que se complete el evento anterior -mouseover-:
thirdParagraph.addEventListener('mouseout', function () {
    this.innerHTML = 'Asociar lógica a eventos.';
});
