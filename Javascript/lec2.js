// const prompt = require("prompt-sync")();
// // stack in javascript
// const arr = [];
// while (true)
// {
//     console.log("1 for push element=");
//     console.log("2. for pop element=");.js

//     console.log("3. for display element=");
//     console.log("4 for exit");
//     let choice = Number(prompt("Enter your choice"));
//     switch (choice)
//     {
//         case 1:
//             {
//                 arr.push(Number(prompt("Enter element=")));
//                 break;
//             }
//         case 2:
//             {
//                 console.log(`Element deleted ${arr.pop()}`);
//                 break;
//             }
//         case 3:
//             {
//                 console.log(arr);
//                 break;
//             }
//         case 4:
//             {
//                 console.log("Program exit");
//                 break;
//             }
//         default:
//             {
//                 console.log("Invalid choice");
//                 break;
//             }
//     }
//     if (choice === 4)
//     {
//         break;
//     }

// }

// Arrow function
const fun = function muliply(x, y) {
  return x * y;
};
console.log(fun(4, 100));

// conver in sort form of above funtion and this sort form known as arrow function
const arrow_fun = (x, y) => x * y;
console.log(arrow_fun(6, 100));

const arrow_fun1 = (x, y) => {
  return x + y;
};

console.log(arrow_fun1(10, 4));

// Higher order function
function merapyarafunction(udharkafunction) {
  return udharkafunction() + 40;
}
function udharkafunction() {
  return 100;
}
console.log(merapyarafunction(udharkafunction));

const fruit = ["Mango", "Banana", "Kiwi", "Pineapple", "Orange", "WaterMellon"];
function printkardo(element) {
  console.log(element);
}
fruit.forEach(printkardo); // it is loop all element of array.

// sort form of above function
fruit.forEach(function printkardo(element) {
  console.log(element);
});

// sort form of above fuction
fruit.forEach((element) => console.log(`-${element}`));

// Internal working of higherorder function

forEach((element) => {
  console.log(`Element are->${element}`);
});

function forEach(bataokyakarnahai) {
  for (let i = 0; i < fruit.length; i++) {
    bataokyakarnahai(fruit[i]);
  }
}

// Map higher order function

const num = [1, 2, 3, 4, 5];
const double = num.map((element) => element * 2); // It is always return new array.
// after calling the map functio first it is initilize new array then store all the elements
console.log(double);

// Make own map function
const num_arr = [1, 2, 3, 4, 5, 6, 7, 8];
const new_arr = map((element) => element * 3);
function map(fun) {
  const new_arr = [];
  for (let i = 0; i < num_arr.length; i++) {
    new_arr.push(fun(num_arr[i]));
  }
  return new_arr;
}
console.log(new_arr);

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr1.forEach((element) => {
  if (element % 2 === 0) {
    console.log(`Even element are=${element}`);
  }
});
