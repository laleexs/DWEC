let tabla = document.getElementById("tablebot");
let td = tabla.getElementsByTagName("td")[0];
let img = td.getElementsByTagName("img")[0];

img.src = "src/cafe/1.jpg";
img.alt = "Café";


img.addEventListener("click", function () {
  mostrarMiniaturas();
});

function mostrarMiniaturas() {
  
  td.innerHTML = ""; // Elimina la imagen inicial

  for (let i = 1; i <= 5; i++) {
    let miniatura = document.createElement("img");
    miniatura.src = "src/cafe/" + i + ".jpg";
    miniatura.alt = "Café " + i;
    miniatura.style.width = "90px";
    miniatura.style.display="inline";
    
 

    miniatura.addEventListener("click", function () {
        mostrarGrande(i); 
    });

    td.appendChild(miniatura);
}
}

function mostrarGrande(num) {
  td.innerHTML = ""; //leer o modificar el contenido HTML interno, lo pone en blanco 

  var grande = document.createElement("img");
  grande.src = "src/cafe/" + num + ".jpg";
  grande.alt = "Café " + num;
  grande.style.width = "400px";  
  

 
  grande.addEventListener("click", mostrarMiniaturas);

  td.appendChild(grande);
}
