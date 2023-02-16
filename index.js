//--- Curso: Desarrollo Front-End (Nivel 2) ED.2022    
//--- Ejercicio final: formulario para crear una cuenta 
//--- Script para procesar los datos del formulario
//--- Última modificación: 16/02/23
//--- Autora: Rosa

//---- Input ----
//Carga los datos del formulario y los guarda en una variable
const formulario = document.getElementById('formR');
//Carga los datos de los inputs del formulario y los guarda
const inputs = document.querySelectorAll('#formR input');
//Expresiones permitidas en cada campo del formulario  (proporcionado por: falconmasters)
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	clave01: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//---- Funcion para validar el formulario cada vez que se escribe o se activa un campo ----
//---- usada para lineas 100 a 103 del código con addEventListener                     ----
const validarFormulario = (e) =>{
    switch(e.target.name){ //evalua para cada caso la condición
        case "nombre"://testea si las expresiones coinciden con los valores del campo para cada caso
            if(expresiones.nombre.test(e.target.value)){ 
                document.getElementById('grupo_nombre').classList.remove('formR_grupo-incorrecto'); //elimina el icono de incorrecto
                document.getElementById('grupo_nombre').classList.add('formR_grupo-correcto'); //añade el icono de check
                document.querySelector('#grupo_nombre .error').classList.remove('error-activo'); //elimina el mensaje de error
                document.querySelector('#grupo_nombre .error2').classList.remove('error2-activo'); //elimina el mensaje  de error
            }else if(e.target.value ==""){ //si el campo está vacio da un error
                document.getElementById('grupo_nombre').classList.add('formR_grupo-incorrecto'); //añade el icono de error
                document.getElementById('grupo_nombre').classList.remove('formR_grupo-correcto'); //elimina el icono de check
                document.querySelector('#grupo_nombre .error2').classList.add('error2-activo'); //añade el mensaje de error: 'rellene este campo'
                document.querySelector('#grupo_nombre .error').classList.remove('error-activo'); //elimina el mensaje de error: 'no puede contener números'
            }else{ //si no cumple la expresion que le corresponde da un error diferente
                document.getElementById('grupo_nombre').classList.add('formR_grupo-incorrecto'); //añade el icono de error
                document.getElementById('grupo_nombre').classList.remove('formR_grupo-correcto'); //elimina el icono de check
                document.querySelector('#grupo_nombre .error2').classList.remove('error2-activo'); //elimina el mensaje de error:'rellene este campo'
                document.querySelector('#grupo_nombre .error').classList.add('error-activo'); //añade el mensaje de error: 'no puede contener números'
            }
        break;
        case "email": //igual que con nombre, pero cambia el campo a 'email'
            if(expresiones.email.test(e.target.value)){
                document.getElementById('grupo_email').classList.remove('formR_grupo-incorrecto');
                document.getElementById('grupo_email').classList.add('formR_grupo-correcto');
                document.querySelector('#grupo_email .error').classList.remove('error-activo');
                document.querySelector('#grupo_email .error2').classList.remove('error2-activo');     
            }else if(e.target.value ==""){
                document.getElementById('grupo_email').classList.add('formR_grupo-incorrecto');
                document.getElementById('grupo_email').classList.remove('formR_grupo-correcto');
                document.querySelector('#grupo_email .error2').classList.add('error2-activo');
                document.querySelector('#grupo_email .error').classList.remove('error-activo');
            }else{
                document.getElementById('grupo_email').classList.add('formR_grupo-incorrecto');
                document.getElementById('grupo_email').classList.remove('formR_grupo-correcto');
                document.querySelector('#grupo_email .error2').classList.remove('error2-activo');
                document.querySelector('#grupo_email .error').classList.add('error-activo');
            }
        break;
        case "clave01": //igual que con nombre, pero cambia el campo a 'clave'
            if(expresiones.clave01.test(e.target.value)){
                document.getElementById('grupo_clave01').classList.remove('formR_grupo-incorrecto');
                document.getElementById('grupo_clave01').classList.add('formR_grupo-correcto');
                document.querySelector('#grupo_clave01 .error').classList.remove('error-activo');
                document.querySelector('#grupo_clave01 .error2').classList.remove('error2-activo');  
            }else if(e.target.value ==""){
                document.getElementById('grupo_clave01').classList.add('formR_grupo-incorrecto');
                document.getElementById('grupo_clave01').classList.remove('formR_grupo-correcto');
                document.querySelector('#grupo_clave01 .error2').classList.add('error2-activo');
                document.querySelector('#grupo_clave01 .error').classList.remove('error-activo');
            }else{
                document.getElementById('grupo_clave01').classList.add('formR_grupo-incorrecto');
                document.getElementById('grupo_clave01').classList.remove('formR_grupo-correcto');
                document.querySelector('#grupo_clave01 .error2').classList.remove('error2-activo');
                document.querySelector('#grupo_clave01 .error').classList.add('error-activo');
            }
        break;
        case "clave02":
            const inputClave1 = document.getElementById('clave01'); //valor de la clave 1
            const inputClave2 = document.getElementById('clave02'); //valor de la clave 2
            if(inputClave1.value === inputClave2.value){ //si la clave 1 es igual a la clave 2, valida el formulario en verde
                document.getElementById('grupo_clave02').classList.remove('formR_grupo-incorrecto');
                document.getElementById('grupo_clave02').classList.add('formR_grupo-correcto');
                document.querySelector('#grupo_clave02 .error').classList.remove('error-activo');
                document.querySelector('#grupo_clave02 .error2').classList.remove('error2-activo');  
            }else if(e.target.value ==""){  //si el campo está vacío, da error
                document.getElementById('grupo_clave02').classList.add('formR_grupo-incorrecto');
                document.getElementById('grupo_clave02').classList.remove('formR_grupo-correcto');
                document.querySelector('#grupo_clave02 .error2').classList.add('error2-activo');
                document.querySelector('#grupo_clave02 .error').classList.remove('error-activo');
            }else{ //si no cumple la condición de clave 1 = clave 2, da otro error
                document.getElementById('grupo_clave02').classList.add('formR_grupo-incorrecto');
                document.getElementById('grupo_clave02').classList.remove('formR_grupo-correcto');
                document.querySelector('#grupo_clave02 .error2').classList.remove('error2-activo');
                document.querySelector('#grupo_clave02 .error').classList.add('error-activo');
            }            
        break;
    }
};
//Aplica la función anterior a cada campo del formulario
inputs.forEach((input)=>{
    input.addEventListener('keyup',validarFormulario); //cuando levanta una tecla
    input.addEventListener('blur',validarFormulario); //cuando clica fuera del formulario, tras activarlo
});
//Para que al pulsar enviar aparezca (o no) un mensaje de error
formulario.addEventListener('submit', (e) =>{
    e.preventDefault(); //cambia los parámetros por defecto
    //Obtenemos el valor del campo y si está vacío dará error
    const valorNombre = document.getElementById('nombre');
    if(valorNombre.value === ""){
        document.getElementById('grupo_nombre').classList.add('formR_grupo-incorrecto');
        document.getElementById('grupo_nombre').classList.remove('formR_grupo-correcto');
        document.querySelector('#grupo_nombre .error2').classList.add('error2-activo');
        document.querySelector('#grupo_nombre .error').classList.remove('error-activo');
    } else{
        document.getElementById('grupo_nombre').classList.remove('formR_grupo-incorrecto');
        document.getElementById('grupo_nombre').classList.add('formR_grupo-correcto');
        document.querySelector('#grupo_nombre .error2').classList.remove('error2-activo');
        document.querySelector('#grupo_nombre .error').classList.remove('error-activo');
    }
    const valorEmail = document.getElementById('email');
    if(valorEmail.value === ""){
        document.getElementById('grupo_email').classList.add('formR_grupo-incorrecto');
        document.getElementById('grupo_email').classList.remove('formR_grupo-correcto');
        document.querySelector('#grupo_email .error2').classList.add('error2-activo');
        document.querySelector('#grupo_email .error').classList.remove('error-activo');
    } else{
        document.getElementById('grupo_email').classList.remove('formR_grupo-incorrecto');
        document.getElementById('grupo_email').classList.add('formR_grupo-correcto');
        document.querySelector('#grupo_email .error2').classList.remove('error2-activo');
        document.querySelector('#grupo_email .error').classList.remove('error-activo');
    }
    const valorClave01 = document.getElementById('clave01');
    if(valorClave01.value === ""){
        document.getElementById('grupo_clave01').classList.add('formR_grupo-incorrecto');
        document.getElementById('grupo_clave01').classList.remove('formR_grupo-correcto');
        document.querySelector('#grupo_clave01 .error2').classList.add('error2-activo');
        document.querySelector('#grupo_clave01 .error').classList.remove('error-activo');
    } else{
        document.getElementById('grupo_clave01').classList.remove('formR_grupo-incorrecto');
        document.getElementById('grupo_clave01').classList.add('formR_grupo-correcto');
        document.querySelector('#grupo_clave01 .error2').classList.remove('error2-activo');
        document.querySelector('#grupo_clave01 .error').classList.remove('error-activo');
    }
    const valorClave02 = document.getElementById('clave02');
    if(valorClave02.value === ""){
        document.getElementById('grupo_clave02').classList.add('formR_grupo-incorrecto');
        document.getElementById('grupo_clave02').classList.remove('formR_grupo-correcto');
        document.querySelector('#grupo_clave02 .error2').classList.add('error2-activo');
        document.querySelector('#grupo_clave02 .error').classList.remove('error-activo');
    } else{
        document.getElementById('grupo_clave02').classList.remove('formR_grupo-incorrecto');
        document.getElementById('grupo_clave02').classList.add('formR_grupo-correcto');
        document.querySelector('#grupo_clave02 .error2').classList.remove('error2-activo');
        document.querySelector('#grupo_clave02 .error').classList.remove('error-activo');
    }
});

//Final del código de procesado