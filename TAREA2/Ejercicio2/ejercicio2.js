const form = document.getElementByTagName('form')[0];
const inputs = document.getElementsByTagName('input'); //Devuelve un HTMLCollection

// funcion validar inputs normales

function testString(element)
{
    const regex = /^[a-zA-Z]+$/; //Expresion regular para la string

    if(regex.test(element.value) === true) {
        element.style.background = '';
        return true;
    } else {
        element.style.background = 'red';
        element.value = ''
        return false
    }
}

function testEmail(element)
{
    const regex = /^[a-zAz0-9.%_-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;

    if(regex.test(element.value)) { // no poner === a true es valido porque el if buscará un valor true si no le decimos lo contrario
        element.style.background = '';
        return true;
    } else {
        element.style.background = 'red';
        element.value = ''
        return false
    }
}

function validateForm(event)
{
    event.preventDefault();
    let counter = 0;

    for(let i = 0; i < inputs.length-1; i++) {
        if(inputs.length[i] == inputs.length-2)
    }
}