// In JavaScript, an array is an ordered list of values. Each value is called an element, and each element has a numeric position in the array, known as its index
// this is an simpl type of an arr 
let b = [10,20,30];
console.log(b);


// 2.nd create using constructor

// let a=Array(40,20,60);
// console.log(a);

// note: this is just the same type of method but the syntax will be diff 

// basic operations on js arr

// 1 accessing elements of an arr

let c = ["html","js", "css"];
console.log(c[0]);
console.log(c[1]);
console.log(c[2]);

// accessing the 1st element of arr
let d = ["chinmay ","wadhwa","hello"]

let fst = d[0];

console.log("here is  your 1st item:",fst);

//accessing the last element of the arr
let f =["god of war","fifa","takken 10"];

let lst  = f [f.length-1];

console.log("here is your item:",lst);



//modifing the arr 
let n=["c","cpp","html"];
console.log(n);

n[0]="bootstrap";
console.log(n);
//this is where u can modify your arr 

//adding elements to arr
// Elements can be added to the array using methods like push() and unshift().

// The push() method add the element to the end of the array.
// The unshift() method add the element to the starting of the array.

let g= ["html","js","python"];

g.push("node.js"); //push for  adding from front 

g.unshift("front end dev");  //unshift for adding from behind the arr
console.log(g);


//removing element from array 
// To remove the elements from an array we have different methods like pop(), shift(), or splice().

let a =["html","css","js"];
console.log("original arry :"+a);

//remove and return the last element 
let last=a.pop();
console.log("after removing last:"+a);

//removing 1st elemnt from the arr
let first=a.shift();
console.log("after removing the 1st arr:"+a);
a.splice(1,2);
console.log("after removing 2 elements from index 1:"+a);


//lets check the lenght of the arry 
let h= ["index","html","database"]
let length =h.length;
console.log("arr length: "+length);

//increasing the decreasing the length of an arr

let k=["hello","my","name is chinmay wadhwa "]
//increasing the length 
k.length=7;
console.log("after the length increased:",k);

//decreaseing the length 
k.length=0;
console.log("after downgrade the length ",k);


//ierating through arr elements We can iterate array and access array elements using for loop and forEach loop.

let l=["good morning!!","good night"];

//through loops 
for(let o =0;o<l.length;o++){
    console.log(l[o])
}




