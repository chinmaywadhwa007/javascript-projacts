// The Array some() method checks if at least one element of the array satisfies the condition implemented by the provided function.

//last indexof() method

function isGreaterThan5(element,index,array){
    return element>5;
}

function func(){
    let array=[2,5,6,3,1];

    //checking for the condition in arr
    let value =array.some(isGreaterThan5);

    console.log(value);
}
func();


//arry reduce()method 
//The array reduce() method reduces an array to a single value by executing a provided function for each value from left to right.

// let number=[88,50,25,10];
 //performing reduce method
// let subject=number.reduce(geeks);
// function geeks(total,number){
//     return total -number;
// }
// console.log(subject);


//arr map() method 
// The map() method in JavaScript creates a new array by calling a specific function on each element of the parent array. It does not mutate the original array.

let number =[4,9,10,25];
//preforming map method 

let sub=number.map(hello);

function hello() {
    return number.map(Math.sqrt);
}
console.log(sub)


//arr every() method
// this method checks if all elements in the arr satisfy a given condition provided by a function

// JavaScript code for every() function
function ispositive(element, index, array) {
    return element > 0;
}

function func() {
    let arr = [11, 89, 23, 7, 98];

    // Check for positive number
    let value = arr.every(ispositive);

    console.log(value);
}

