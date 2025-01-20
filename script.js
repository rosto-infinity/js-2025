let nbre;
console.log(nbre);
console.log(nbre1);




console.log(x); // undefined
var x = 5;
console.log(x); // 5


console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;



console.log(sayHello()); // "Hello!"

function sayHello() {
    return "Hello!";
}

// ####

console.log(sayHello()); // Uncaught ReferenceError: Cannot access 'sayHello' before initialization"

const sayHello =function sayHello() {
    return "Hello!";
}


console.log(sayHello())  // Uncaught ReferenceError: Cannot access 'sayHello' before initialization"
const sayHello =function () {
    return "Hello!";
}


console.log(sayHello())  // Uncaught ReferenceError: Cannot access 'sayHello' before initialization"
const sayHello =() => {
    return "Hello!";
}

console.log(sayHello())  // Uncaught ReferenceError: Cannot access 'sayHello' before initialization"
const sayHello =() => "Hello!";
