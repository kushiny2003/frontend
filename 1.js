// do{

const { useReducer } = require("react");

// }
// while(condition);


// let x=1;     
// do{
// console.log(x);
// x++;
// }                            
// while(x<3);


// for (let value of iterable){
//     //code
// }

// let str="ApnaWorld";
// for(let i of str){
//     console.log("i=",i)
// }


// let str1="Javascript";
// let size=0;
// for(let j of str1){
//     console.log("j=",j);
//     size++;
//    console.log("size=",size);
    
// }
// console.log("size=",size);




// let fruits=["Apple","Mango","Banana"];
// for(let fruit of fruits){

//     console.log(fruit);
    
// }

// let number=[1,2,3];
// for(let k of number){
//     console.log(k);
    
// }


// let str="Kushi";
// for(let i of str){
//     console.log(i);
    
// }

// for-in loop

// for(let key in objvar){
//     //code
// }

// let student={
//     name:"kushi",
//     place:"banglore",
//     course:"mca"
// };

// for(let i in student){
//     console.log("key=",i,"value=",student[i]);
    
// }

// let fruits=["apple","mango","banana"];
// for(let index in fruits){
//     console.log(fruits[index]);

// }
// arr=[1,2,3]
// arr[2] 

// let college={
//     name:"aims",
//     class:"mba",
//     teacher:"mam"
// };
// for(let j in college){
//     console.log("key=",j,"value=",college[j]);
    
// }

// let even=[1,2,3,4,5,6];
// for(let k in even){
//     if(k%2!==0){
//         console.log(k);
        
//     }
// }

//create a game where you start with any random game number.Ask the user to keep guessing
//  the game number until the user enters correct value
// const prompt=require('prompt-sync')();
// let gamenum=26;
// let usernum=prompt("guess the number");
// while(usernum!=gamenum){
//     console.log("you entered wrong number,guess again");
    
// }
// console.log("congragulations,u won the game");

// let str="kushi";
// str.length;
// str[0],str[1]

// //template literals
// // `string text ${expression} string text`


// let k={
//     item:"pen",
//     price:10
// };

// let output=`the cost of ${k.item} is ${k.price} rupees`
// console.log(output);


// let name="kushi";
// let place="bengaluru";


// console.log(`My name is ${name} and my place is ${place}`);

// let a=10;
// let b=20;
// console.log(`the sum is ${a+b}`);

// let str1=" hello  my name is" 
// // console.log(str1.toLowerCase());
// // console.log(str1.toUpperCase());
// console.log(str1);

// console.log(str1.trim());
// str1.slice(start,end?)
// let str="7865456";
// console.log(str.slice(1,3));

//concatination
// let str1="245";
// let str2="kushi";

// res=str1.concat(str2)
// console.log(res);

//replace
// let str3="1235";
// console.log(str3.replace("3","8"));

// str4="hellololo";
// console.log(str4.replaceAll("lo","p"));

// let arr=["ironman","spiderman","Eman"];
// let marks=[87,98,76,89];
// console.log(arr.length);
// console.log(marks.length);
// arr[2]="Man";
// console.log(arr);













// let fruits=["Apple","Mango","Banana","Pineapple"];
// fruits.shift();
// console.log(fruits);

// let numbers1=[90,87,87,45];
// let numbers2=[87,76];
// // console.log(numbers);

// // console.log(numbers.toString());
// console.log(numbers2.concat(numbers1));


// slice-->doesnt change original 
// splice--->change original Array


// let heros=["DBoss","dhanveer","Dhruva","sudeep","Ganesh"];
// console.log(heros);
// console.log(heros.slice(1,3));
// console.log(heros);


// splice(add,remove ,replace);
// splice(startIndx , delcount, new element )

// let arr1=[1,2,3,4,5,6];
// console.log(arr1);

// arr1.splice(1,3,101);
// console.log(arr1);











// def functionname:

// functionname

// function functionname{

// }
// functionname


// const Even=(num)=>{
//     if(num%2==0){
//         console.log("even number");
//     }
//     else{
//         console.log("odd number")
//     }
// }
// Even(10);
// Even(7);


// const functionName=(parameters)=>{}

// const Even=(num)=>{
//     if(num%2==0){
//         console.log("even number");
//     }
//     else{
//         console.log("odd numbers");
//     }
// }
// Even(10);


// callback function
// func1   func2 


// function Good(){
//     console.log("Hello kushi");
// }

// function hello(callback){
//     callback();
// }


// hello(Good);

// function Banglore(callback){
//     // console.log("Hi");
//     callback();
// }
// function Hi(){
//     console.log("bye");
    
// }
// Banglore(Hi)


// forEach()

// Array.forEach(function(element){
//     //code
// });


// let numbers=["Apple","Mango"];
// numbers.forEach((num)=>{console.log(num);

// })

// map function

// Array.map(()=>{});
// Array.map(()=>{});

// let numbers=[1,2,3,4,5];
//  let res=numbers.map((num)=>{
// return num**2;
// });
// console.log(res);

// let fruits=["apple","mango"];
// let a=fruits.map((name)=>{
// return  name.toUpperCase();
// })
// console.log(a);











// let number=[2,4,6];
// let k=number.map((add)=>{
// return add+10;
// });
// console.log(k);



// Array.filter((element)=>{
//     return condition ;
// });


let numbers=[1,2,3,4,5,6];
 let res=numbers.filter((num)=>{
return num>3;
});
console.log(res);

let name=["kushi","pallavi","Eman"];
let k=name.filter((hi)=>{
return hi.length>4;
});
console.log(k);


prototype
async await
reduce 
Promise
DOM 
closure
hoisting
lexical scope 
some and every 
sort