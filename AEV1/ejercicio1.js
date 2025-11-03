const seriesArray = [
  {
    titulo: "The Wire",
    imagen: "https://pics.filmaffinity.com/the_wire-680717276-large.jpg",
    reparto: [
      { personaje: "Omar Little", actor: "Michael K. Williams" },
      { personaje: "Jimmy McNulty", actor: "Dominic West" },
      { personaje: "Stringer Bell", actor: "Idris Elba" }
    ]
  },
  {
    titulo: "Seinfeld",
    imagen: "https://ntvb.tmsimg.com/assets/p183875_b_h10_ab.jpg?w=960&h=540",
    reparto: [
      { personaje: "Jerry Seinfeld", actor: "Jerry Seinfeld" },
      { personaje: "George Costanza", actor: "Jason Alexander" },
      { personaje: "Cosmo Kramer", actor: "Michael Richards" }
    ]
  }
];

const peliculasArray = [
  {
    titulo: "Good Boy (2025)",
    imagen: "https://pics.filmaffinity.com/good_boy-840537395-mmed.jpg",
    reparto: [
      { personaje: "Todd", actor: "Shane Jensen" },
      { personaje: "Vera (la hermana de Todd)", actor: "Arielle Friedman" },
      { personaje: "El abuelo de Todd", actor: "Larry Fessenden" }
    ]
  },
  {
    titulo: "Noise (2024)",
    imagen: "https://pics.filmaffinity.com/noijeu-700157261-mmed.jpg",
    reparto: [
      { personaje: "Joo-young", actor: "Lee Sun-bin" },
      { personaje: "Joo-hee", actor: "Han Su-a" },
      { personaje: "Ki-hoon", actor: "Kim Min-seok" }
    ]
  },
  {
    titulo: "La Lista",
    imagen: "https://es.web.img2.acsta.net/c_310_420/pictures/14/03/27/10/23/486205.jpg",
    reparto: [
      { personaje: "Wyatt", actor: "Hugh Jackman" },
      { personaje: "Jonathan", actor: "Ewan McGregor" },
      { personaje: "S.", actor: "Michelle Williams" }
    ]
  }
];


let categoriaActual = "series";
let itemIndex = 0;
let personajeIndex = 0;



let buttonSeries = document.getElementsByClassName("nutrition")[0];
let buttonPeliculas = document.getElementsByClassName("nutrition")[1];
let books = document.getElementsByClassName("book");
let pelisBooks = books[0].getElementsByTagName("a");
let peliAnterior = pelisBooks[0];
let peliSiguiente = pelisBooks[1];
let actoresBooks = books[1].getElementsByTagName('a');
let actoresAnterior = actoresBooks[0];
let actoresSiguiente = actoresBooks[1];
let lengthPelis = peliculasArray.length;
let lengthSeries = seriesArray.length;


let movies = document.createElement("div");
movies.setAttribute("class", "peliculas");

movies.style.display = "none"; // oculto de inicio


const series = document.getElementsByClassName("series")[0];// seleciono uno porque devuelve HTML colection
series.insertAdjacentElement('afterend', movies);

function crearImagen(src) {
  let divImg = document.createElement("div");
  divImg.setAttribute("class", "img");
  divImg.style.width = "250px"
  divImg.style.display = "none";

  let img = document.createElement("img");
  img.src = src; // metemos la direccion de la imagen dentro de src

  divImg.appendChild(img); //metemos la imagen dentro del div

  return divImg;
}

function crearDescripcion(reparto) {
  let divDescription = document.createElement("div");
  divDescription.setAttribute("class", "description");
  let ul = document.createElement("ul");
  divDescription.style.display = "none"; // escondiendo la descripcion de actores en peliculas

  reparto.forEach(({ actor, personaje }) => {// actor y personaje son atributos del array de objetos
    let li = document.createElement("li");

    let h2 = document.createElement("h2");
    h2.textContent = personaje;

    let h3 = document.createElement("h3");
    h3.textContent = actor;

    li.appendChild(h2);
    li.appendChild(h3);
    ul.appendChild(li);
  });
  divDescription.appendChild(ul); // primero metemos en la clase descripcion el h2 de personaje


  return divDescription; // devuelve el dic descripcion
}

function crearBotones() { // crear botones de classe book
  const divBook = document.createElement("div");
  divBook.className = "book";

  const anterior = document.createElement("a");
  anterior.textContent = "Anterior";

  const siguiente = document.createElement("a");
  siguiente.textContent = "Siguiente";

  divBook.appendChild(anterior);
  divBook.appendChild(siguiente);

  return divBook; // devuelve el div Botones
}


for (let i = 0; i < peliculasArray.length; i++) {
  let h1Cat = document.createElement("h1");
  h1Cat.setAttribute("class", "cat");
  h1Cat.textContent = peliculasArray[i].titulo;

  let divImg = crearImagen(peliculasArray[i].imagen); //funcion crearImagen
  let divDescription = crearDescripcion(peliculasArray[i].reparto);

  movies.appendChild(h1Cat);
  movies.appendChild(divImg);
  movies.appendChild(divDescription);

}
let buttonPersonaje = crearBotones();
let buttonActores = crearBotones();

movies.appendChild(buttonPersonaje);
movies.appendChild(buttonActores);

const buttonPelis = buttonPersonaje.getElementsByTagName('a');
const pelisAnterior = buttonPelis[0];
const pelisSiguiente = buttonPelis[1];

const pelisActores = buttonActores.getElementsByTagName('a');
const pelisActAnterior = pelisActores[0];
const pelisActSiguente = pelisActores[1];

pelisAnterior.addEventListener("click", (e) => {
  e.preventDefault(); moverItem("anterior");
});
pelisSiguiente.addEventListener("click", (e) => {
  e.preventDefault(); moverItem("siguiente");
});
pelisActAnterior.addEventListener("click", (e) => {
  e.preventDefault(); moverPersonaje("anterior");
});
pelisActSiguente.addEventListener("click", (e) => {
  e.preventDefault(); moverPersonaje("siguiente");
});

//-----------------------------funciones-------------------------
function mostrarCategoria(categoria) {
  categoriaActual = categoria; // guardamos cuál está activa

  const divSeries = document.querySelector(".series");
  const divPeliculas = document.querySelector(".peliculas");

  if (categoria === "series") {
    divSeries.style.display = "block";
    divPeliculas.style.display = "none";
  } else {
    divSeries.style.display = "none";
    divPeliculas.style.display = "block";
  }
  itemIndex = 0;
  personajeIndex = 0;
  mostrar();
}



function moverItem(direccion) {
  const data = seleccionarArray();// seriesArray o peliculasArray
  const totalItems = data.length;

  if (direccion === "siguiente") {
    itemIndex = itemIndex + 1; // pasamos al siguiente
    if (itemIndex >= totalItems) {// si nos pasamos del final
      itemIndex = 0;    // volvemos al principio
    }
  } else if (direccion === "anterior") {
    itemIndex = itemIndex - 1; // retrocedemos
    if (itemIndex < 0) {
      itemIndex = totalItems - 1; // volvemos al último
    }
  }

  personajeIndex = 0;  // al cambiar de película, empezamos por el primer personaje
  mostrar();
}

function moverPersonaje(direccion) {
  const data = seleccionarArray();// seriesArray o peliculasArray
  const reparto = data[itemIndex].reparto; // lista de personajes del item actual
  const totalPersonajes = reparto.length; // cuántos personajes hay

  if (direccion === "siguiente") {
    personajeIndex = personajeIndex + 1;
    if (personajeIndex >= totalPersonajes) { // si nos pasamos
      personajeIndex = 0;  // volvemos al primero
    }
  } else if (direccion === "anterior") {
    personajeIndex = personajeIndex - 1;
    if (personajeIndex < 0) { // si bajamos de 0
      personajeIndex = totalPersonajes - 1; // volvemos al último
    }
  }
  
  mostrar();   // actualizamos lo que se ve
}

function mostrar() {
  const data = seleccionarArray();
  const item = data[itemIndex];
  const personaje = item.reparto[personajeIndex];

  const contenedor = (categoriaActual === "series")
    ? document.getElementsByClassName("series")[0]
    : document.getElementsByClassName("peliculas")[0];


  const cats = contenedor.getElementsByClassName("cat");
  const imgs = contenedor.getElementsByClassName("img");
  const descs = contenedor.getElementsByClassName("description");


  for (let i = 0; i < cats.length; i++) { //  Ocultar todo
    cats[i].style.display = "none";
    imgs[i].style.display = "none";
    descs[i].style.display = "none";
  }


  cats[itemIndex].style.display = "block";  // Mostrar SOLO el índice actual
  imgs[itemIndex].style.display = "block";
  descs[itemIndex].style.display = "block";

  //  Actualizar título e imagen del item visible
  cats[itemIndex].textContent = item.titulo;

  const imagen = imgs[itemIndex].getElementsByTagName("img")[0];
  imagen.src = item.imagen;

  //  Actualizar/mostrar el personaje actual
  const descripcionDiv = descs[itemIndex];

  if (categoriaActual === "peliculas") {

    const lis = descripcionDiv.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
      lis[i].style.display = "none"; // Oculta todos y muestra solo el del personaje actual.
      if (lis[personajeIndex]) {
        lis[personajeIndex].style.display = "list-item";
      } else {
        const h2 = descripcionDiv.getElementsByTagName("h2")[0];
        const h3 = descripcionDiv.getElementsByTagName("h3")[0];
        if (h2) {
          h2.textContent = personaje.personaje;
        }
        if (h3){
          h3.textContent = personaje.actor;
        }
      }

    }
  }
  
}
    

    function seleccionarArray() {
      if (categoriaActual === "series") {
        return seriesArray;
      } else {
        return peliculasArray;
      }
    }

    buttonSeries.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarCategoria("series");
    });

    buttonPeliculas.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarCategoria("peliculas");
    });

    // movimiento entre pelis/series y actores

    actoresAnterior.addEventListener("click", (e) => {
      e.preventDefault(); // evita el comportamiento de enlace
      moverPersonaje("anterior");
    });

    actoresSiguiente.addEventListener("click", (e) => {
      e.preventDefault();
      moverPersonaje("siguiente");
    });

    peliAnterior.addEventListener("click", (e) => {
      e.preventDefault();
      moverItem("anterior");
    });

    peliSiguiente.addEventListener("click", (e) => {
      e.preventDefault();
      moverItem("siguiente");
    });

