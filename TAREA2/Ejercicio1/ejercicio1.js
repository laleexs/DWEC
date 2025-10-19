let form = document.getElementsByTagName('form')[0]; // tenemos que selecionar cul es el que queremos coger en caso de que fuera mas de uno
let inputs = document.getElementsByTagName('input');


function validateForm(event){
    event.preventDefault();
    console.log('-----------------------------');
    let= contador= 0; 
    let letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    for(let i = 0; i < inputs.length-1; i++){
        
        if(inputs[i].placeholder == "DNI" ){
            const regex = /^[0-9]{8}$/;
            let resultDNI = regex.test(inputs[i].value);
            inputs[i].value='';
            inputs[i].style.background = "";
            console.log(resultDNI);

            if (resultDNI == false){
                inputs[i].style.background = "red";
                inputs[i].value='';
            }else{
                contador ++;
                 alert(letters[inputs[3].value % 23]);
            }
            
        }else{
            const regex = /^[A-Za-z]+$/;
            let result = regex.test(inputs[i].value);
            console.log(result);

            if (result == false){
                inputs[i].style.background = "red";
            }else{
                contador ++;
                inputs[i].style.background = "";
            }
        }
        
    }
    if(contador == inputs.length){
        form.reset(); // para que se reseté el formulario
    }
}

form.addEventListener('submit', (e) => validateForm(e));