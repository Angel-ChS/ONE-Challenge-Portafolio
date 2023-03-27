import { validaciones } from "./validaciones.js";

const inputs = document.querySelectorAll('#input'); //seleccionamos todos los imput que nosotros tenemos en el html

inputs.forEach((input) =>{
    input.addEventListener('blur',(input)=>{//A todos los input les va a agregar el evento listener de "blur" cuando salgan de foco
        validaciones(input.target);//cuando salgan de foco van a mandar a llamar a esa funcion
    });
});