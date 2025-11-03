let gridThree = document.getElementsByClassName('elementor-grid-3');
let gridOne = document.getElementsByClassName('elementor-grid-1');
let container = document.getElementsByClassName('container elementor-grid');
let photoContainer = document.getElementsByClassName('photo-container');

const removePhotos = (index) => {
    gridThree[0].className = 'elemetor-grid-1'; // cambia de tener 3 fotos a tener la clase que muestra solo 1 
    container[1].remove();
    Array.from(photoContainer).map((element, index) => {
        (index > 0) && element.remove();
    });
    photo[0].remove();
    createPhoto(index);
}

const createPhotos = (index) => {
     let div = document.createElement('div');
    div.setAttribute = ('class', 'photo'); // primero el elemento que creamos segundo el nombre
    div.style.backgroundImage = `url(images/${index + 1}.jpg)`;
    div.addEventListener('click', removePhoto);
    console.log(index);
}

const removePhoto = () => {
    alert('remove photos');

}