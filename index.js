
// Declarar variables y objetivos necesarios
var num1, num2;

// Funciones y métodos para realizar operaciones
function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  if (num2 === 0) {
    return "Error: división por cero";
  }
  return num1 / num2;
}

function calcularPorcentaje(num1, num2) {
  return (num1 * num2) / 100;
}

// Obtener los números de entrada del usuario
num1 = parseFloat(prompt("Ingrese el primer número:"));
num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Validar que los números sean válidos
if (isNaN(num1) || isNaN(num2)) {
  alert("Error: Ingrese números válidos");
} else {
  // Realizar operaciones
  var suma = sumar(num1, num2);
  var resta = restar(num1, num2);
  var multiplicacion = multiplicar(num1, num2);
  var division = dividir(num1, num2);
  var porcentaje = calcularPorcentaje(num1, num2);

  // Efectuar una salida del resultado
  console.log("=== Resultado de la calculadora ===");
  console.log("Primer número: " + num1);
  console.log("Segundo número: " + num2);
  console.log("------------------------------");
  console.log("Suma: " + suma);
  console.log("Resta: " + resta);
  console.log("Multiplicación: " + multiplicacion);
  console.log("División: " + division);
  console.log("Porcentaje: " + porcentaje);
  console.log("------------------------------");
  console.log("¡Gracias por utilizar la calculadora!");

  // Función para mostrar el resultado en una ventana emergente
  function mostrarResultado() {
    var resultado = "=== Resultado de la calculadora ===\n" +
      "Primer número: " + num1 + "\n" +
      "Segundo número: " + num2 + "\n" +
      "------------------------------\n" +
      "Suma: " + suma + "\n" +
      "Resta: " + resta + "\n" +
      "Multiplicación: " + multiplicacion + "\n" +
      "División: " + division + "\n" +
      "Porcentaje: " + porcentaje + "\n" +
      "------------------------------\n" +
      "¡Gracias por utilizar la calculadora!";
    alert(resultado);
  }

  // Llamar a la función para mostrar el resultado en una ventana emergente
  mostrarResultado();
}
 