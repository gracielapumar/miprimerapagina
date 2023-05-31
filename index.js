//Encuentra al elemento HTML (el boton) mediante su ID 
const miBoton = document.getElementById('miBoton');
// Define la funcion que se ejecutará cuando se haga clic en el botón
function handleClick() {
    alert('Hola Has hecho clic en ele botón.');
}
// Añadimos un oyente al botón por su id
miBoton.addEventListener("click", handleClick);{
    
}