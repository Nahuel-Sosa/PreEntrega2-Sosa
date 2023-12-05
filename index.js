alert("SIMULADOR DE PLAZO FIJO");
let tasainteresmensual = 0.098;
let tasainteresanual = 1.18;

do {
  let capital = parseInt(prompt(`Capital a invertir `));
  let tasa = parseInt(
    prompt(`Ingrese el tipo de tasa:
0-Mensualmente
1-Anualmente`)
  );
  console.log(tasa);

  while (tasa > 1 || tasa < 0 || tasa == NaN) {
    alert("Has ingresado una opción invalida");
    tasa = parseInt(
      prompt(`Ingrese el tipo de tasa:
    0-Mensualmente
    1-Anualmente`)
    );
  }

  if (tasa == 0) {
    alert("Perfecto su simulacion sera mensualmemente");
    alert(`PLAZO FIJO MENSUAL:
    CAPITAL: ${capital}
    TASA DE INTERES: ${tasainteresmensual}
    SALDO FINAL:${capital + capital * tasainteresmensual} `);
  } else if (tasa == 1) {
    alert(`Perfecto su simulación sera anualmente `);
    alert(`PLAZO FIJO ANUAL:
CAPITAL: ${capital} 
TASA DE INTERES: ${tasainteresanual} 
SALDO FINAL:${capital + capital * tasainteresanual} `);
  }
} while (confirm("¿Quiere realizar otro plazo fijo?"));
alert("Gracias por usar mi simulador de plazo fijo");