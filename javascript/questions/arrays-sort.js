//¿Cuál es el resultado esperado?
const bitcoins = [5, 10, 1, 8, 12];
bitcoins.sort();

bitcoins; // ?
// El método "sort" de Array, por
// defecto es ascendente y convierte
// sus elementos en string usando 
// un encoding de UTF-16. Por eso
// el ordenamiento de números falla.
// Para resolver esto debes usar.
bitcoins.sort(  (a, b)  =>  a - b );
bitcoins; //?
