// properties of object in js

// 1 accessing object properties 

// let obj ={name:"chinmay",age:22};

//method 1 using dot notation

// console.log(obj.name);

//method 2 using bracket notation

// console.log(obj["age"]);


//2 modifiying object properties 

//properties in an object can be modified by rassiging their values

// let obj={name:"chinmay wadhwa ",age:22};
// console.log(obj);
// obj.age=22;
// console.log(obj);


//adding properties to an object 
// we can dynamically add new properties to an object using dot or break method 

// let obj = { model: "ducaati ", color: "royal blue" };
// delete obj.color;

// console.log(obj);

//5 checking if a property exit or not

// let obj ={model:  "polo"
// };
// console.log("color"in obj);
// console.log(obj.hasOwnProperty("model"));

// 6th merging propperties of object
//object can be merged using an object.assign()or the spread syntax obj1...obj2


// let obj1={name:"game devlopment"};
// let obj2={name:"web devlopment"};
// let obj3={start:"from 2026"};

// let obj4={...obj1,...obj2,...obj3};
// console.log(obj4);