export function validaciones(input){

    const tipoDeAtributo = input.dataset.tipo; 

    if(input.validity.valid){
        input.parentElement.classList.remove("input__container--Error"); 
        input.parentElement.querySelector(".input__mensaje--Error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input__container--Error"); 
        input.parentElement.querySelector(".input__mensaje--Error").innerHTML = mostrarMensajeDeError(tipoDeAtributo,input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch", 
    "patternMismatch"
]; 

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
        patternMismatch: "El campo nombre debe contener mayúsculas y minúsculas y debe de tener de 5 a 50 caracteres, sin números y sin caracteres especiales"
    }, 
    email: {
        valueMissing: "El campo email no puede estar vacio", 
        typeMismatch: "El correo no es valido"
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio",
        patternMismatch: "Debe de tener de 5 a 50 caracteres"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio",
        patternMismatch: "Debe de tener de 5 a 300 caracteres"
    }
}

function mostrarMensajeDeError(tipoDeAtributo,input){//aquí recibe el data-atribute(segun el tipo del input) y recibe el input completo
    let mensaje 
    tipoDeErrores.forEach( error =>{ //Con el forEach recorremos la lista tipoDeErrores siendo error la variable que hace el recorrido
        if(input.validity[error]){//Aquí vemos que con error vemos que con el parametro input recorremos los tipo de errores que puede contener 
            console.log(tipoDeAtributo, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeAtributo][error]);
            mensaje = mensajesDeError[tipoDeAtributo][error];//Si la valor que tiene la variable error que trae de tipoDeErrores es correcta al tipo de error que presenta el input con .validity, pues lo que hacemos es que recorremos el objeto mensajesDeError dependiendo el parametro del data-atribute dado y dependiendo su error y si estos coinciden y existe pues se guardan en la variable mensaje 
        }
    })
    return(mensaje);//La variable mensaje es retornada para que sea lo que se va a poner en la funcion valida
}