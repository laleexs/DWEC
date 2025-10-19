let movies = document.createElement("div");
movies.setAttribute("class", "peliculas");

let seriesArray = [
    ["the Wire","https://pics.filmaffinity.com/the_wire-680717276-large.jpg", "Omar","McNulty", "Stringer Bell"],
    ["Seinfeld","https://ntvb.tmsimg.com/assets/p183875_b_h10_ab.jpg?w=960&h=540","Herry","George","Kramer"]
];

const series = document.getElementsByClassName("series")[0];// seleciono uno porque devuelve HTML colection
series.insertAdjacentElement('afterend', movies);

function crearImagen(src)
{
    let divImg = document.createElement("div");
    divImg.setAttribute("class","img");

    let img = document.createElement("img");
    img.src = src; // metemos la direccion de la imagen dentro de src

    divImg.appendChild(img); //metemos la imagen dentro del div

    return divImg;
}

function crearDescripcion()
{

}

for(let i = 0; i < peliculas.length; i++) {
    let h1Cat = document.createElement("h1");
    h1Cat.setAttribute("class","cat");
    h1Cat.textContent= peliculas[i].titulo;
    
    let divImg = crearImagen(peliculas[i].imagen); //funcion crearImagen



    peliculas.appendChild(h1Cat);
    peliculas.appendChild(divImg);

    

}
