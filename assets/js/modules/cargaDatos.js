export default {
  datosBotonSumar: ()=>{
    let elBotonSumar = document.getElementById('botonSumar');
    elBotonSumar.addEventListener('click', realizarSuma);
  }
}//Fin export

let realizarSuma = ()=>{
  console.log('Funciona el boton Suma');
}
