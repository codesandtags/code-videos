// Si tenemos
1.1 + 2.1 === 3.2

// ¿Porqué esto no es correcto?
1.1 + 2.2 === 3.3

1.1 + 2.2

// Internamente los computadores
// usan un formato de punto
// flotante binario, y no se
// puede representar
// correctamente como 3.3
// para solucionarlo puedes:
Number(
  (1.1 + 2.2).toFixed(1)
) === 3.3 //??







