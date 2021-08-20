export default {
  datosBotonSumar: ()=>{
    let elBotonSumar = document.getElementById('botonSumar');
    elBotonSumar.addEventListener('click', realizarSuma);

  },
  datosBotonRestar: ()=>{
    let elBotonRestar = document.getElementById('botonRestar');
    elBotonRestar.addEventListener('click', realizarResta);
  }
}//Fin export

let realizarSuma = ()=>{
  console.log('Funciona el boton Suma');
  let dato1 = 4;
  let dato2 = 3;
  let resultado = dato1+dato2;
  let mensaje = `El resultado de sumar ${dato1} con ${dato2} es: ${resultado}`;
  console.log(mensaje);
}

let realizarResta = ()=>{
  console.log('Funciona el boton Resta');
  let dato1 = 4;
  let dato2 = 3;
  let resultado = dato1-dato2;
  let mensaje = `El resultado de restar ${dato1} con ${dato2} es: ${resultado}`;
  console.log(mensaje);
}
