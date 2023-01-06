// ¿Cuál es la diferencia entre setTimeout
// setInterval y requestAnimationFrame
let contador = 20;

// Retrasa la ejecución del callback de una
// function en tiempo determinado. (ms)
// setTimeout(() => {
//   console.log(--contador);
// }, 500);

// Ejecuta repetidamente el callback de una
// function en un intervalo de tiempo determinado
setInterval(() => {
  console.log(contador / 60);
}, 1000);


window.requestAnimationFrame(() => {
  console.log(--contador);
})
