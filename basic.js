"use strict";
// //primitives
// //basic properties
// let age: number;
// age = 12;
// let userName: string;
// userName = "shakil hossain";
// let isInstalled: boolean;
// isInstalled = false;
// // let's write complex type
// //array
// let hobbies: string[];
// hobbies = ["Sports", "Cooking"];
// let person: {
//   name: string;
//   age: number;
// };
// person = {
//   name: "Shakil",
//   age: 32,
// };
// // object with array
// let people: {
//   name: string;
//   age: number;
// }[];
// people = [
//   { name: "Shakil", age: 32 },
//   { name: "shakil2 ", age: 14 },
// ];
// //  type inference 
// // union type | ai symbol ta 
// let course: string | number = 'react the complete guide';
// course =2938298
// // type alias 
// let hobby : string[];
// hobby = ['rugby' , 'football'];
// type Person = { 
//  name : string,
//  age: number 
// }
// let person: Person;
//  person ={
//   name: 'Shakil',
//   age: 34
// }
// console.log();
// Funciotn & types 
//  function adding(a:number, b:number) {
//    return a + b;  
//  }
// function print (value : any){
//   console.log(value);   //ata specail value return korbe void 
// }
// // generics 
// function insertatAtBeginning <T> (array:T[], value:T){
// const newArray = [value, ...array];
// return newArray;
// }
// const demoArray = [1,2,3,4,5,6];
// const updatedArray = insertatAtBeginning(demoArray,-1)
// const stringArray = insertatAtBeginning(['a','b','c'],'d')
// console.log(updatedArray);
// console.log(stringArray);
