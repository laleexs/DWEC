let photo = document.getElementsByClassName("photo");

Array.from(photo).map((element, index) =>{
     element.style.backgroundImage = `url('images/${index + 1}.jpg')`;  
})