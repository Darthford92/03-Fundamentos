/* ==========================================================================
   04 — Lógica Mixta | 10 Katas
   Combinás variables, condicionales y bucles.
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 31 — FizzBuzz Extendido
   Dado un número, retorná:
   - "Fizz"         si es múltiplo de 3
   - "Buzz"         si es múltiplo de 5
   - "Bazz"         si es múltiplo de 7
   - "FizzBuzz"     si es múltiplo de 3 y 5
   - "FizzBazz"     si es múltiplo de 3 y 7
   - "BuzzBazz"     si es múltiplo de 5 y 7
   - "FizzBuzzBazz" si es múltiplo de 3, 5 y 7
   - El número como string si no cumple ninguna regla. Ej: fizzBuzzExtendido(2) → "2"
-------------------------------------------------------------------------- */
function fizzBuzzExtendido(n) {
  // TU CÓDIGO AQUÍ 👇

  let fizzBuzzExtendido = "";

    if (n % 3 === 0){
      fizzBuzzExtendido += "Fizz"
    } 

    if (n %  5 === 0) {
        fizzBuzzExtendido += "Buzz"
    } 

    if (n %  7 === 0) {
        fizzBuzzExtendido += "Bazz"
    }
    return fizzBuzzExtendido || String(n);
}

/* --------------------------------------------------------------------------
   KATA 32 — Descuento en Carrito
   Dado un array de precios, calculá el total.
   Si el total SUPERA 5000, aplicá un descuento del 15%.
   Retorná el precio final a pagar.
-------------------------------------------------------------------------- */
function calcularTotal(precios) {
  // TU CÓDIGO AQUÍ 👇

  let sumatoria = 0;

  for (let i = 0; i < precios.length; i++){
    sumatoria += precios [i] ;
  }

  if (sumatoria > 5000){
      sumatoria = sumatoria*0.85;
      return sumatoria;
  } else {
    return sumatoria;
  }
}

/* --------------------------------------------------------------------------
   KATA 33 — Contador de Pares e Impares
   Dado un límite, contá cuántos pares e impares hay del 1 al límite.
   Retorná un objeto: { pares: X, impares: Y }
   Ej: contarParesEImpares(6) → { pares: 3, impares: 3 }
-------------------------------------------------------------------------- */
function contarParesEImpares(limite) {
  // TU CÓDIGO AQUÍ 👇
  let pares = 0;
  let impares = 0;

  for (let i = 1; i <= limite; i++){
    if (i % 2 === 0){
      pares += 1;
    } else {
      impares += 1;
    }
  }
  return {
    pares: pares,
    impares: impares
  };
}

/* --------------------------------------------------------------------------
   KATA 34 — Palabras en Mayúsculas
   Dado un string con varias palabras, dividílo por espacios y retorná
   un array con cada palabra convertida a mayúsculas.
   Ej: palabrasEnMayusculas("hola mundo") → ["HOLA", "MUNDO"]
-------------------------------------------------------------------------- */
function palabrasEnMayusculas(oracion) {
  // TU CÓDIGO AQUÍ 👇
  
  //Primero separo el string mediante split
  let oracionModificada = oracion.split(" ");
  // ahora dentro de oraciónModificada hay un array de cada una de las palabras
  // "hola mundo" (se vuelve) -> ["hola", "mundo"]

  //Ahora agarramos oracion modificada y con map lo recorremos y en cada parte del array
  // convertimos lo que haya en mayusculas
  let arrayFinal = oracionModificada.map(p => p.toUpperCase());
  //retorno oración modificada
  return arrayFinal;

}

/* --------------------------------------------------------------------------
   KATA 35 — Clasificar Número
   Dado un número, retorná un objeto con dos propiedades:
   - esPar: true si es par, false si es impar.
   - mayorQueCinco: true si es mayor que 5, false si no.
   Ej: clasificarNumero(8) → { esPar: true, mayorQueCinco: true }
-------------------------------------------------------------------------- */
function clasificarNumero(numero) {
  // TU CÓDIGO AQUÍ 👇

  let esPar;
  let mayorQueCinco;

  if (numero % 2 === 0){
    esPar = true;
    if (numero > 5){
      mayorQueCinco = true;
    } else {
      mayorQueCinco = false;
    }
  } else {
    esPar = false;
    if (numero > 5){
      mayorQueCinco = true;
    } else {
      mayorQueCinco = false;
    }
  }

  return {
    esPar: esPar,
    mayorQueCinco: mayorQueCinco,
  }

}

/* --------------------------------------------------------------------------
   KATA 36 — Divisibles por 3 pero no por 9
   Dado un límite, retorná un array con todos los números del 1 al límite
   que sean divisibles por 3 pero NO por 9.
   Ej: divisiblesPor3NoNueve(20) → [3, 6, 12, 15]
-------------------------------------------------------------------------- */
function divisiblesPor3NoNueve(limite) {
  // TU CÓDIGO AQUÍ 👇
  // creo un nuevo array dónde se van a guardar los números hasta el límite
  // fuera del for para que no se reinicie
  let nuevoArray = [];

  //con un for recorro los números desde el 0 al límite y los pusheo
  // en el nuevo array
  for (let i = 1 ; i <= limite ; i++) {
    nuevoArray.push(i);
  }

  //una vez tengo todos los números en el nuevo array los filtro en un nuevo array
  let divisiblesPor3NoNueve = nuevoArray.filter(n => n % 3 === 0 && n % 9 !== 0)
  //luego retorno ese nuevo array
  return divisiblesPor3NoNueve;

}

/* --------------------------------------------------------------------------
   KATA 37 — Conversión de Temperatura
   Dado una temperatura en Celsius, retorná un objeto con:
   - fahrenheit: C * 9/5 + 32  (redondeado a 2 decimales)
   - kelvin: C + 273.15
   Ej: convertirTemperatura(100) → { fahrenheit: 212, kelvin: 373.15 }
-------------------------------------------------------------------------- */
function convertirTemperatura(celsius) {
  // TU CÓDIGO AQUÍ 👇

  // creamos dos variables y directamente le asignamos el valor de fahrenheit y celcius con sus
  // respectivas cuentas.
  //a Fahrenheit debemos aplicarle .toFixed(2) para que limite los decimales a 2 pero
  // eso devuelve un string, así que hay que agregar antes el Number para volverlo número.
  let fahrenheit = Number((celsius*9/5 +32).toFixed(2));
  let kelvin = celsius + 273.15

  return {
    fahrenheit: fahrenheit,
    kelvin: kelvin,
  }
}

/* --------------------------------------------------------------------------
   KATA 38 — Contar Tiradas de Dado
   Dado un array de tiradas (números del 1 al 6), retorná un objeto
   que cuente cuántas veces salió cada número (del 1 al 6).
   Ej: contarTiradas([1, 2, 1, 3, 1, 6]) → { 1: 3, 2: 1, 3: 1, 4: 0, 5: 0, 6: 1 }
-------------------------------------------------------------------------- */
function contarTiradas(tiradas) {
  // TU CÓDIGO AQUÍ 👇

  // creo un objeto llamado tiradasrecurrentes que está vacio
  let tiradasRecurrentes = {};

  //lo recorro con un for para crear las llaves (keys) que van a contener luego los números
  //ya que la consigna me dice que solo va a haber números del 1 al 6 limitamnos el for
  //a esos parametros
  for (let i = 1; i <= 6; i++){
    //entonces por cada posición del array se creará una llave (key) en el objeto
    //y cada una tendrá un valor de 0
    tiradasRecurrentes[i]=0
  }  

  //una vez esté el objeto con las llaves (keys), debo recorrer el array de nuevo pero esta 
  // vez completo (hasta ser menor al array.lenght o se nos pasa de scope)
  for (let i = 0; i < tiradas.length; i++){
    // asignamos en una nueva variable el valor que hay en la posición del indice que recorre tiradas
    let valorDado = tiradas[i];
    //luego en tiradasRecurrentes usamos esa variable como posición y directamente le sumamos 1 punto
    //al número que allí se encuentre.
    tiradasRecurrentes[valorDado] += 1;
  }
   return tiradasRecurrentes;
}

/* --------------------------------------------------------------------------
   KATA 39 — Divisores de un Número
   Dado un número entero positivo, retorná un array con todos sus divisores
   en orden ascendente.
   Ej: obtenerDivisores(12) → [1, 2, 3, 4, 6, 12]
-------------------------------------------------------------------------- */
function obtenerDivisores(numero) {
  // TU CÓDIGO AQUÍ 👇

  //Iniciamos con la creación d eun array vacio
  let divisores = [];

  //con un for recorremos el array desde 1 hasta que llegamos al número que se le pasa a la función
  for (let i = 1; i <= numero; i++){
    //si el numero, dividido por la posición en la que está el for da un resto de 0
    if (numero % i === 0){
      //entonces pusheo a divisores la posición (que es el número que puede dividir al que llega a la funcion)
      divisores.push(i);
    }
  }
return divisores;

}

/* --------------------------------------------------------------------------
   KATA 40 — DESAFÍO FINAL: Adivina el Número
   Dado un número secreto y un array de intentos, retorná un array
   con el resultado de cada intento:
   - "Demasiado bajo"  si el intento es menor al secreto.
   - "Demasiado alto"  si el intento es mayor al secreto.
   - "¡Correcto!"      si el intento es igual al secreto.
   Ej: adivinarNumero(10, [5, 15, 10]) → ["Demasiado bajo", "Demasiado alto", "¡Correcto!"]
-------------------------------------------------------------------------- */
function adivinarNumero(secreto, intentos) {
  // TU CÓDIGO AQUÍ 👇

  let todosLosIntentos = [];

  for (let i = 0; i < intentos.length ; i++){
    if (secreto === intentos[i]) {
      todosLosIntentos.push("¡Correcto!")
    } else if (secreto < intentos[i]){
      todosLosIntentos.push("Demasiado alto")
    } else {
      todosLosIntentos.push("Demasiado bajo")
    }
  }

  return todosLosIntentos;
}





// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  fizzBuzzExtendido,
  calcularTotal,
  contarParesEImpares,
  palabrasEnMayusculas,
  clasificarNumero,
  divisiblesPor3NoNueve,
  convertirTemperatura,
  contarTiradas,
  obtenerDivisores,
  adivinarNumero,
};
