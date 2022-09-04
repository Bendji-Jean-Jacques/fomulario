//alert("Hola soy Bendji!!!");    ES UNA FUNCION DE JAVA SCRIP PARA ENVIAR UNA ALERTA AL NAVEGADOR

//const nombre = prompt (" cual es tu nombre? ");
//const num1 = prompt (" cual es tu numero? ");


const nombre = document.getElementById("nombre");

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
 e.preventDefault();
alert(nombre.value);

})

console.log(btn)
// const.log(email);





