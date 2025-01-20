// let nbre;
// console.log(nbre);
// console.log(nbre1);




// console.log(x); // undefined
// var x = 5;
// console.log(x); // 5


// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;



// console.log(sayHello()); // "Hello!"

// function sayHello() {
//     return "Hello!";
// }

// // ####

// console.log(sayHello()); // Uncaught ReferenceError: Cannot access 'sayHello' before initialization"

// const sayHello =function sayHello() {
//     return "Hello!";
// }


// console.log(sayHello())  // Uncaught ReferenceError: Cannot access 'sayHello' before initialization"
// const sayHello =function () {
//     return "Hello!";
// }


// console.log(sayHello())  // Uncaught ReferenceError: Cannot access 'sayHello' before initialization"
// const sayHello =() => {
//     return "Hello!";
// }

// console.log(sayHello())  // Uncaught ReferenceError: Cannot access 'sayHello' before initialization"
// const sayHello =() => "Hello!";


// Destructuring
// Un concept important des objets et souvent utilisé, c'est le destructuring. En JavaScript, il est facile de
// récupérer les valeurs d'un tableau dans des variables.


const fruits = ["🍎", "🍌", "🍇"];

let apple1 = "🍎"
let banana1 = "🍌"
let grape1 = "🍇"

console.log(apple1);

const [apple, banana, grape] = fruits;

console.log(apple);

// apple = ""
// banana = ""
// grape = """

const fruits2 = ["🍎", "🍌", "🍇"];
console.log(fruits2);

const fruits20 = ["🍎", "🍌", "🍇"];
console.log(fruits20);

console.log( fruits2 === fruits20);

let  fruits21 = ["🍎", "🍌", "🍇"];
console.log(fruits21);

let  fruits22 = ["🍎", "🍌", "🍇"];
console.log(fruits22);

console.log( fruits21 === fruits22);







const [apple2,...rest] = fruits2;

console.log(rest);


const fruitsCopy = [...fruits2];
console.log(fruits2 === fruitsCopy);

const initialColors0 = ["Red", "Green", "Blue", "Gray", "White"];


// Pour faire une copie du tableau initialColors, vous pouvez utiliser plusieurs méthodes en JavaScript. Voici quelques-unes des plus courantes :
// 1. Utiliser l'opérateur de propagation (Spread Operator)


const initialColors = ["Red", "Green", "Blue", "Gray", "White"];
const copiedColors0 = [...initialColors];
// •	Explication : L'opérateur de propagation ... crée une nouvelle copie du tableau initialColors.
// 2. Utiliser la méthode slice()


const copiedColors1 = initialColors.slice();
// •	Explication : La méthode slice() sans arguments renvoie une copie superficielle de tout le tableau.
// 3. Utiliser Array.from()

const copiedColors2 = Array.from(initialColors);
// •	Explication : Array.from() crée un nouveau tableau à partir d'un tableau existant.
// 4. Utiliser concat()


const copiedColors = initialColors.concat();
// •	Explication : concat() sans arguments renvoie une copie du tableau.
// Conclusion
// Chacune de ces méthodes crée une nouvelle référence pour le tableau, ce qui signifie que les modifications apportées à copiedColors n'affecteront pas initialColors. Par exemple :


copiedColors[0] = "Yellow";
console.log(initialColors); // ["Red", "Green", "Blue", "Gray", "White"]
console.log(copiedColors);  // ["Yellow", "Green", "Blue", "Gray", "White"]

