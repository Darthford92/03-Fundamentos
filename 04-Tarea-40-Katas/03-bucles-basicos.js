/* ==========================================================================
   03 — Bucles Básicos | 10 Katas
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 21 — Números del 1 al N
   Dado un número n, retorná un array con todos los números del 1 al n.
   Ej: numerosHastaN(5) → [1, 2, 3, 4, 5]
-------------------------------------------------------------------------- */
function numerosHastaN(n) {
  // TU CÓDIGO AQUÍ 👇

  // se crea un array vació llamado resultado
  let resultado = [];

  //se crea una variable i inicializada en el número 1
  //se le asigna una condición, que i sea mayor o igual a n
  //siempre que no se cumpla la condición i sumará 1 a su valor, así recorre la completitud del array
  for (let i = 1; i <= n ; i++) {
    //se llama a push para empujar el resultado de i hacia uno de los espacios del array
    //esto se ejecutará hasta que i sea igual a n
    //i cada una de esas iteracciones se guarda en el array resultado
    resultado.push(i);
  }
  //se retorna el array completo que contiene todos los números desde 1 a n
  return resultado;
}

/* --------------------------------------------------------------------------
   KATA 22 — Cuenta Regresiva
   Dado un número de inicio, retorná un array con la cuenta regresiva
   hasta 0, y al final el string "¡Despegue! 🚀".
   Ej: cuentaRegresiva(3) → [3, 2, 1, 0, "¡Despegue! 🚀"]
-------------------------------------------------------------------------- */
function cuentaRegresiva(inicio) {
  // TU CÓDIGO AQUÍ 👇
  // for (inicio; condición; cambio)

  // se crea un array vació llamado resultado
  let resultado = [];

  //se crea una variable i inicializada en el valor que se le da a la función mediante inicio
  //se le asigna una condición, que i sea mayor o igual a 0
  //siempre que no se cumpla la condición i restará 1 a su valor
  for (let i = inicio; i >= 0 ; i--){
    //se llama a push para empujar el resultado de i hacia uno de los espacios del array
    //esto se ejecutará hasta que i sea 0, dando la sensación de una cuenta regresiva, ya que i va decresiendo
    //guardando así todas las multiplicaciones en el array
    resultado.push(i);
  }
  //por último se pushea un string al final, simulando un despegue
  resultado.push("¡Despegue! 🚀");

  //fianlmente se retorna el valor completo del array simulando la cuenta regresiva para el despegue
  return resultado;
}

/* --------------------------------------------------------------------------
   KATA 23 — Tabla de Multiplicar
   Dado un número, retorná un array con los 10 primeros múltiplos en formato string.
   Ej: tablaMultiplicar(7) → ["7 x 1 = 7", "7 x 2 = 14", ..., "7 x 10 = 70"]
-------------------------------------------------------------------------- */
function tablaMultiplicar(numero) {
  // TU CÓDIGO AQUÍ 👇
  // se crea un array vació llamado tabla
  let tabla = [];

  //se crea una variable i inicializada en 1 (ya que se pide la tabla del 1 al 10)
  //se le asigna una condición, que i sea menor o igual a 10 (por la tabla)
  //siempre que no se cumpla la condición i sumará 1 a su valor
  for (let i = 1; i <= 10 ; i++){
    //se llama a push para empujar el resultado de numero*i hacia uno de los espacios del array
    //esto se ejecutará hasta que i sea 11
    //guardando así todas las multiplicaciones en el array
    tabla.push(`${numero} x ${i} = ${numero*i}`)
  }
  //se retorna el valor de la tabla entera
  return tabla;
}

/* --------------------------------------------------------------------------
   KATA 24 — Factorial
   Dado un número n, calculá y retorná su factorial.
   Ej: factorial(5) → 120   (porque 5 × 4 × 3 × 2 × 1 = 120)
   Definí factorial(0) = 1.
-------------------------------------------------------------------------- */
function factorial(n) {
  // TU CÓDIGO AQUÍ 👇
  // resultado guarda el multiplicador, debe ser 1 porque todo lo que se multiplique por 0 da 0
  let resultado = 1;

  // i empieza con el valor de n
  // mientras i sea menor o igual a 1 sera la condición de ejecución
  // mientras la condición se cumpla a i se le restara 1
  for (let i = n; i >= 1; i--){

    // entonces resultado será igual a resultado *1 (si acá resultado da 0, entonces siempre guardará 0)
    // ya que es una multiplicación y cualquier número multiplicado por 0 da 0
    resultado = resultado * i;
  }
  //finalmente se retorna el valor de resultado
  return resultado;
}

/* --------------------------------------------------------------------------
   KATA 25 — Sin Múltiplos de 4
   Dado un límite, retorná un array con los números del 1 al límite
   excluyendo los que son múltiplos de 4.
   Ej: sinMultiplosDe4(8) → [1, 2, 3, 5, 6, 7]
-------------------------------------------------------------------------- */
function sinMultiplosDe4(limite) {
  // TU CÓDIGO AQUÍ 👇

  //creo un array resultado vacio
  let numeros = [];

  //inicializo i, el contador en 1
  //mientras i sea menor o igual a limite
  // isumara un punto a su valor
  for (let i = 1; i <= limite; i++ ){

    //pero la idea no es poner los multiplos de 4
    //asi que se crea un if con una condición para todo aquel número que no sea divisible por 4
    if (i % 4 != 0){
      // si no es divisible entra en la condición y pushea el número al array
      numeros.push(i);
    }
  }
  //luego retorna el array sin los números divisibles por 4
  return numeros;
}

/* --------------------------------------------------------------------------
   KATA 26 — Primer Múltiplo de 13 Mayor a 100
   Retorná el primer número que sea múltiplo de 13 y sea estrictamente mayor que 100.
   (No recibe parámetros, la respuesta siempre es la misma)
-------------------------------------------------------------------------- */
function primerMultiploDe13MayorA100() {
  // TU CÓDIGO AQUÍ 👇

  // se crea un for que se inicialice en 101 porque debe ser un número mayor a 100
  // se le pone una condición hasta 200
  // si no cumple la condición i, el contador, suma un digito
  for (let i = 101; i <= 200; i++ ){
    //se pone un if que controle que i sea divisible por 13
    if (i % 13 == 0) {
      //si i es divisible por 13 se retorna i y se ejecuta un break, ya que solo pide un número
      return i;
      break;
    }
  }
}

/* --------------------------------------------------------------------------
   KATA 27 — Triángulo de Asteriscos
   Dado un número de filas, retorná un array donde cada elemento es una fila.
   Ej: triangulo(3) → ["*", "**", "***"]
-------------------------------------------------------------------------- */
function triangulo(filas) {
  // TU CÓDIGO AQUÍ 👇

let numeroFilas = [];
let triangulo = "";

for (let i = 1; i <= filas ; i++){
  triangulo = triangulo + "*"
  numeroFilas.push (triangulo)
}
return numeroFilas;
}



/* --------------------------------------------------------------------------
   KATA 28 — Suma del 1 al N
   Dado un número n, retorná la suma de todos los números del 1 al n.
   Ej: sumaHastaN(10) → 55
-------------------------------------------------------------------------- */
function sumaHastaN(n) {
  // TU CÓDIGO AQUÍ 👇
  let sumatoria = 0

  for (let i = 0; i <= n ; i++){
    sumatoria = sumatoria + i;
  }
  return sumatoria;
}

/* --------------------------------------------------------------------------
   KATA 29 — Fibonacci
   Dado un número n, retorná un array con los primeros n números
   de la secuencia de Fibonacci.
   Ej: fibonacci(6) → [0, 1, 1, 2, 3, 5]
-------------------------------------------------------------------------- */
function fibonacci(n) {
  // TU CÓDIGO AQUÍ 👇
  let fibonacci = [];
  let primNum = 0;
  let segNum = 1;

  if (n === 1){
    fibonacci.push(primNum);
  } else {
    fibonacci.push(primNum);
    fibonacci.push(segNum);
  }

  for(let i = 0; i < (n - 2); i++){
    let sumatoria = primNum+segNum;
    fibonacci.push(sumatoria);
    primNum = segNum;
    segNum = sumatoria;
  }
  return fibonacci;
}

/* --------------------------------------------------------------------------
   KATA 30 — ¿Es Primo?
   Dado un número, retorná true si es primo o false si no lo es.
   Un número primo solo es divisible por 1 y por sí mismo.
   Tip: los números menores o iguales a 1 no son primos.
-------------------------------------------------------------------------- */
function esPrimo(numero) {
  // TU CÓDIGO AQUÍ 👇
 
   if (numero <= 1) {
      return false;
    } 
  for (let i = 2; i < numero ; i++){
   if (numero % i === 0){
      return false;
    }
  }
  return true;
}

// 🚨 ¡NO TOCAR ESTA LÍNEA!
module.exports = {
  numerosHastaN,
  cuentaRegresiva,
  tablaMultiplicar,
  factorial,
  sinMultiplosDe4,
  primerMultiploDe13MayorA100,
  triangulo,
  sumaHastaN,
  fibonacci,
  esPrimo,
};
