//¿Cuál de los siguientes métodos
//de Arrays tiene mejor rendimiento?
const bitcoins = [1, 2, 3];

bitcoins.push(5, 5);
bitcoins.unshift(5, 5);

bitcoins;

// "push" es: O(1), dado que el
// elemento se agrega al final
// "unshift" es: O(n), dado que 
// es necesario mover todos los 
// elementos del array para 
// agregar el nuevo elemento