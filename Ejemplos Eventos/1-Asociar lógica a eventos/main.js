// Con addEventListener podemos asociar una lógica de programación 
// para que suceda cuando el usuario realice determinada acción (evento).
// addEventListener es una función predefinida del lenguaje que nos permite pasar como parámetros
// de entrada un evento (click, dblclick, mouseover, mouseout, keydown, keyup, etc.) y una función
// que se ejecutará cuando el usuario realice el evento indicado.

// Ejemplo de evento 'click':

// Seleccionamos el parrafo con la id 'parrafoUno' para que cuando el usuaio haga click sobre él, se
// cambie el contenido de dicho párrafo.

//Para ello seleccionamos primero el párrafo indicado y después aplicamos addEventListener:

document.getElementById("parrafoUno").addEventListener("click", function () {
    document.getElementById("parrafoUno").innerText = "Hemos cambiado el párrafo.";
});


// Si hacemos click sobre el párrafo comprobaremos que se efectivamente se cambia el contenido del párrafo.

// El código implementado se puede mejorar de modo que sea más legible:

// Podemos emplear 'this' para hacer referencia a que la función que pasamos para que se ejecute cuando el 
// usuario realice el evento, estamos haciendo la acción sobre el mismo elemento:
// Veamos el ejemplo anterior utilizando this porque estamos cambiando el contenido del mismo párrafo sobre 
// el que se ha hecho click.

document.getElementById("parrafoUno").addEventListener("click", function () {
    this.innerText = "Hemos cambiado el párrafo.";
});


// Es recomendable guardar la selección en una variable y posteriormente aplicarle el addEventListenes a dicha variable:

let firstParagraph = document.getElementById("parrafoUno");

firstParagraph.addEventListener("click", function () {
    this.innerText = "Hemos cambiado el párrafo.";
});

// Finalmente, podemos 'sacar' la función del addEventListener. De este modo se podría utilizar por otras funciones del programa:

function changeParagraph() {
    this.innerText = "Hemos cambiado el párrafo.";
}

firstParagraph.addEventListener("click", changeParagraph);