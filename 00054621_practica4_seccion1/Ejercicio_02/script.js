var variable1;
let variable2;
const varible3 = 2;

var $jquery, _private;

var 50cent = 1, esto no vale =1

var variable = 2, VARIABLE = 2;

var camelCase = 2, snake_case = 2;

var camelCase = 2;

var snake_case = 3;

var miVariable;
let miOtraVariable;

miVariable = 2;
miOtraVariable = 2;

var miVariable = 42;
let miOtraVariable = miVariable;

console.log(miVariable);
var miVariable = 2;
console.log(miVariable);

console.log(miOtraVariable);
let miOtraVariable = 2;
console.log(miOtraVariable);

const estoNoDaraProblemas = 42;

const estoVaAFallar;
const estoTambienFallara = 2;
estoTambienFallara = 3;

typeof variable;
variable instanceof Clase;

typeof undefined;
typeof estaVariableQueNoHeInicializadoAun;

typeof null;
typeof { key: 2 };
typeof [15, 4];
typeof new Date();

typeof true;
typeof false;
typeof new Boolean(true);

typeof "hola";

typeof function (){};

typeof 1;
typeof 1.3;
typeof NaN;
typeof Infinity;

typeof Symbol();
typeof Symbol("mi simbolo");

const suma = 1 + 2;
const resta = 3 - 2;
const producto = 2 * 4;
const division = 9 / 3;
const potencia = 3 ** 2;
const modulo = 8 % 3;

const concatenarStrings = "Hola" + " " + "mundo" + "!"
const sumaStringYNumero = 1 + "1"

const banana = "b" + "a" +"a" +"a"

const expresion1 = (3 + 7) * 10;
const expresion2 = 3 + 7 * 10;
const expresion3 = 2 ** 3 ** 2;

let inicio = +5;
const sumaYAsigna = ++inicio;
const asignaYSuma = inicio++;
const restaYAsigna = --inicio;
const asignaYResta = inicio--;
console.log(inicio);

let x = 1;
let y = 2;
let z = 3;
x = y;
x += z;
x *= y;
x /= y;
x %= x;

const masFalsoQueSalvame = !true;

const cherto = true && true;
let noECherto = false && true;
noECherto = false && false;
noECherto = true && false;

let cherto2 = true || true;
const eCherto = false || false;
const eCherto2 = true || false;
const noECherto2 = false || false;

const mayorQue = 100 > 50;
const menorQue = 50 < 100;
const mayorOIgualQue = 100 >= 100;
const menorOIgualQue = 100 <= 100;
const igualOCasi = 100 == "100";
const igualYDelMismoTipo = 100 === 100;
const noIgual = 100 !== "100";

1 == '1';
1 === '1';
false == 0;
false === 0;
'' == 0;
'' === 0;

if (true) {
  console.log("true, por eso me ejecuto");
} else {
  console.log("false, por eso me ejecuto");
}

const miNumero = prompt("¿Qué número estoy pensando?");
if (miNumero < 5) {
  alert("miNumero es bastante pequeño");
} else if (miNumero > 5) {
  alert("vaya, miNumero se ha pasado");
} else {
  alert("miNumero es 5!");
}

let numero = prompt("¿Qué número estoy pensando?");
switch (numero) {
  case "5":
    alert("¡Número correcto!");
    break;
  case "4":
  case "6":
    alert("¡Casi aciertas!");
    break;
  default:
    alert("Frío, frío");
}

let edad = prompt("¿Cuántos años tienes?", 0);
while (edad <= 18) {
  alert("Eres demasiado joven lo siento");
  edad = prompt("¿Cuántos años tienes?", 0);
}

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}

for (let i = 10, j = 0; i > j; i -= 1) {
  console.log(i, j);
}
