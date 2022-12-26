// Coercion 101: 
// The practice of persuading someone to do something by using force or threats.

// "Loose" equality operator: ==
// Compara sólo valores
null == undefined
1 == true
0 == false
5 == '5'

// "Strict" equality operator: ===
// Compara estrictamente valores y tipos de dato
null === undefined
null === null
1 === true
0 === false
5 === '5'
isNaN('5')

// Conversion
Number(false)
Number(true)
Boolean(99)
Boolean(0)
String(5)
typeof String(5)

NaN === NaN
Infinity == Infinity
10/0

// Advance Type Coercion to check
// if a value is null or undefined
// Using syntactic sugar
let pikachu = null;

if (pikachu === undefined || pikachu === null) {
  console.log('No Pika');
}

if (pikachu == null) {
  console.log('No Pika 2.0');
}
