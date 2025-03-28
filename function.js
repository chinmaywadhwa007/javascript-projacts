// Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.

function sum(x, y) {
  return x + y;
}
console.log(sum(10, 20));

// 2nd topic is calling functions

// After defining a function, the next step is to call them to make use of the function. We can call a function by using the function name separated by the value of parameters enclosed between the parenthesis.
function welcomeMsg(chinmay) {
  return ("hello" + chinmay + " welcome to my new website called cricket vlogs daily");
}

let nameVal="chinmay";
//calling function 
console.log(welcomeMsg(nameVal));



// types of function as follow

// arrow function Arrow functions are a concise syntax for writing functions, introduced in ES6, and they do not bind their own this context.

const a=["god of war","tekken 8","spidy 2", "split function"];

const a2 = a.map(function (s){
    return s.length;
});
console.log("normal way",a2);

const a3=a.map((s)=> s.length);
console.log("using arrow function ",a3)
 

// immediately invoked function expression 

// are executed immediately after their definition. They are often used to create isolated scopes.

var result = (function() {
    var x = 10;
    var y = 20;
    return x + y;
})();
 
console.log(result); 

// callback functions 
// is passed as an arugment to another function  and is executed after the completion of that function

function num(n,callback){
    return callback (n);
}
const double=(n)=>n*2;
console.log(num(1000,double));

// Anonymous Functions
// Anonymous functions are functions without a name. They are often used as arguments to other functions.

setTimeout(function () {
    console.log("Anonymous function executed!");
},1000);

// setTimeout method allows u to execute a function after some specific delay like (milliseconds),this method is useful for creating delays or scheduling tasks to run latter 

// last and final function is pure function
// it returns the same output for the same input and do not  produce side effects they do not modify state of obj passed argument 

function pureAdd(a,b){
    return a+b;
}
console.log(pureAdd(10,5));



// Advantages of Functions in JavaScript
// Reusability: Write code once and use it multiple times.
// Modularity: Break complex problems into smaller, manageable pieces.
// Improved Readability: Functions make code easier to understand.
//  Maintainability: Changes can be made in one place without affecting the entire codebase.