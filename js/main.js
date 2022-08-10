function enviarSaludo() {
  //obtengo el valor del formulario nombre
  //encapsulo el valor en una variable
  let nombre = document.getElementById('nombre').value;

  //obtengo el valor del formulario apellido
  //encapsulo el valor en una variable
  let apellido = document.getElementById('apellido').value;

  //guardo el mensaje en una variable
  let requisito = `Debes colocar tu nombre y apellido`;

  //guardo el mensaje en una variable
  let saludo = `Bienvenido ${nombre} ${apellido}, gracias por rellenar el formulario de LarnU`;

  //realizo un return de un condicional
  return (
    //condicion
    //si los datos obtenidos son igual a una string vacia entonces has lo siguiente
    nombre === '' || apellido === ''
      ? // si falla
        //muestrame el mensaje que esta en la variable requisitos
        (document.getElementById('saludo').innerHTML = requisito)(
          // añade la clase incorrecto
          document.getElementById('saludo').classList.add('incorrecto')
        )(
          //elimina la clase correcto si esta se encuentra
          document.getElementById('saludo').classList.remove('correcto')
        )
      : //si es correcto
        //muestrame el mensaje que esta en la variable saludo
        (document.getElementById('saludo').innerHTML = saludo),
    //añade la clase incorrecto
    document.getElementById('saludo').classList.add('correcto'),
    //elimina la clase correcto si esta se encuentra
    document.getElementById('saludo').classList.remove('incorrecto'),
    //elimina todos los datos que esta en el input nombre
    (document.getElementById('nombre').value = ''),
    //elimina todos los datos que esta en el input apellido
    (document.getElementById('apellido').value = '')
  );
}
// da click en la variable onclick y realiza la funcion que llama a la funcion enviar
document.getElementById('btn').onclick = function () {
  enviarSaludo();
};
