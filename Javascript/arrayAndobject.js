// const arr = [1, 2, 3, 4, 5];
// console.log(arr["2"] !==arr["02"]);
// // inseting at the end
// arr.push(7,8,9);

// // inserting at the begining
// arr.unshift(0);

// // deleting the last element
// arr.pop();

// //deleting the first element
// arr.shift();

// Deleting multiple items of array
// const removedItem = arr.splice(2);
// console.log(removedItem);

// // for checking that is exist or not in array
// console.log(arr.includes(1));

// // Create your ages array
// const ages = [12, 18, 25, 15, 30];
// // Use filter to get only adults (18+)
// const adults = ages.filter((element) => {
//   if (element > 17) {
//     return element;
//   }
// });
// // Log the adults array
// console.log(adults);

// // Create your users array
// const users=[
//   {id:1,
//   name:"Alice",
//   },
//   {
//     id:2,
//     name:"Bob"
//   },
//   {
//     id:3,
//     name:"Charlie"
//   }
// ];
// // Use find to get user with id 2
// const foundUser=users.find(user=>user.id===2)
// // Log the found user
// console.log(foundUser);

// // Create your expenses array
// const expenses=[100,50,75,25];
// // Use reduce to calculate the total
// const total=expenses.reduce((sum,expenses)=>sum+expenses,0);
// // Log the total
// console.log(total);

// const fruits = [];
// fruits.push("Mango", "banana", "orange");
// console.log(fruits.length); //3

// // if we access the element via index but it(index) is not available in array. the engine the update the array automatically.
// fruits[8] = "Pineapple";
// console.log(fruits);//[ 'Mango', 'banana', 'orange', <5 empty items>, 'Pineapple' ]
// console.log(fruits.length);//9

// console.log(Object.keys(fruits));

// // Decreasing the length property does, however, delete elements.
// fruits.length = 3;
// console.log(fruits);//[ 'Mango', 'banana', 'orange' ]

// const colors = ["red", "blue", "orange", "black"];
// colors[5] = "Purpule";

// // Traversing the items of index
// colors.forEach((item, index) => console.log(`index ${index} value ${item}`));

// console.log(colors.reverse()); //[ 'Purpule', <1 empty item>, 'black', 'orange', 'blue', 'red' ]

// console.log(Array.isArray(colors));//Returns true if the argument is an array, or false otherwise.

// // Access items by index
// colors[0];//red

// colors[1];//blue;

// // using a index larger than the length that is return undefined
// colors[99];// return undefined

// const arsenal = ["Riffile", "Pistols", "Ak47"];
// console.log(arsenal.indexOf("Riffile")); // 0
// console.log(arsenal.indexOf("M16"));

// const fruits = ["Banana", "Orange", "Apple", "Pineapple", "Strawerry"];
// console.log(fruits);//[ 'Banana', 'Orange', 'Apple', 'Pineapple', 'Strawerry' ]
// const start = -3;// start form end -1 last index;
// const removedItem = fruits.splice(start);
// console.log(removedItem);//[ 'Apple', 'Pineapple', 'Strawerry' ]

// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// const start = 0;
// const deleteCount = 3;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Banana", "Mango"]
// console.log(removedItems);
// // ["Apple", "Strawberry", "Cherry"]

// Remove the single item by index
// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// const start = fruits.indexOf("Strawberry");
// const deleteCount = 1;
// const removedItem = fruits.splice(start, deleteCount);
// console.log(fruits);//["Apple","Cherry","Banana","Mango"]

// Replace multiple items in an array
// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// const start = -3;
// const replaceCount = 2;

// const removedItem = fruits.splice(start, replaceCount, "Hello", "World");
// console.log(fruits);//["Apple","Straberry","Hello","World","Mango"]
// console.log(removedItem);//["Cherry","Banana"]

// //Iterator over array
// for (let fruit of fruits)
// {
//   console.log(fruit);
// }
// fruits.forEach((items, index) => console.log(index, items));

// Merge the arrays
// const fruits1 = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// const fruits2 = ["Litchy", "Guavava"];
// const fruits = fruits1.concat(fruits2);
// console.log(fruits1);
// console.log(fruits2);
// console.log(fruits);

// const orders = [
//   { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
//   { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
//   { dish: "caesar salad", price: 9, spicy: false, qty: 3 },
//   { dish: "Inferno Wings", price: 1, spicy: true, qty: 2 },
//   { dish: "Irafalo irato", price: 1, spicy: true, qty: 2 },
// ];
// destructring the object
// const obj = { a: "Himanshu", b: "Harsh", c: "vandana" };
// const { b: a1, a: b1, c: c1 } = obj;
// console.log(a1);

/// Use of find function
// const arrOfObject = [
//   {name: "Rahul", coach: "S5", seat: 42, status: "confirmed" },
//   {name:"himanshu",coach:"S5",seat:45,status:"waiting"},
// ];
// const found = arrOfObject.find(({ coach }) => coach === "S5");
// console.log(found);

// const found1 = arrOfObject.find(({ name }) => name.toLowerCase() === "Himanshu".toLowerCase());
// console.log(found1);

// const founded_arr = arrOfObject.filter(({ coach }) => coach === "S5");
// console.log(founded_arr);

// use of findIndex method
// if (!Array.isArray(passengers) || typeof na !== "string") return undefined;
// const founded = passengers.find(
//   ({ name }) => name.toLowerCase() === na.toLowerCase(),
// );
// return founded;

// orders.forEach((element) =>
//   console.log(
//     `dish:${element.dish},price:${element.price},spicy:${element.spicy},qty:${element.qty}`,
//   ),
// );

// orders.forEach((order, index) => console.log(`#${index + 1}: ${order.dish}`));

// for (let key in orders) {
//   console.log(key, orders[key]);
// }

// const bill = orders.map((order) => `${order.dish}:$${order.price * order.qty}`); //map always return array
// console.log(Array.isArray(bill));

// const spicy_food = orders.filter((order) => order.spicy);
// console.log(spicy_food);

// //Reduce function return same type of initial value
// const totol_exp = orders.reduce((sum, order) => {
//   return sum + order.qty * order.price;
// }, 0);
// console.log(totol_exp);

// const spicy_fo = orders.reduce(
//   (acc, order) => {
//     const category = order.spicy ? "spicy" : "mild";
//     acc[category].push(order.dish);
//     return acc;
//   },
//   { spicy: [], mild: [] },
// );
// console.log(spicy_fo);

// const crt = [true, false, true, false, true];
// const count = crt.reduce((acc, ele) => {
//     if (ele) return acc + 1;
//     return acc;
// }, 0);
// console.log(count);
// const passenger = {
//   name: "Himanshu",
//   to: "dadar",
//   from: "andheri",
//   classType: "first",
// };
// if (typeof passenger !== "object" || passenger === null) return "INVALID PASS";
// const key = ["name", "from", "to", "classType"];
// if (
//   key.some(
//     (element) =>
//       typeof passenger[element] !== "string" || passenger[element].length === 0,
//   )
// ) {
//   return "INVALID PASS";
// }
// if (
//   passenger.classType.toLowerCase() !== "first" &&
//   passenger.classType.toLowerCase() !== "second"
// ) {
//   return "INVALID PASS";
// }
// const classType = passenger.classType.toUpperCase();
// const Passid =
//   passenger.name.slice(0, 1).toUpperCase() +
//   passenger.from.slice(0, 3).toUpperCase() +
//   passenger.to.slice(0, 3).toUpperCase();
// console.log(
//   `MUMBAI LOCAL PASS\n---\nName: ${passenger.name.toUpperCase()}\nFrom: ${passenger.to.slice(0, 1).toUpperCase() + passenger.to.slice(1).toLowerCase()}\nTo: ${passenger.from.slice(0, 1).toUpperCase() + passenger.from.slice(1).toLowerCase()}\nClass: ${classType}\nPass ID: ${Passid}`,
// );
// let message="25/01/2025, 14:30 - Rahul: Bhai party kab hai? 😂"
//  const [date,rest] = message.split(", ");
//  const [time,remaining] = rest.split(" - ");
// const [nam, remaining1] = remaining.split(": ");
// console.log(date);
// console.log(time);
// console.log(nam);
// console.log(remaining1);

// const obj = {
//     name: "Himanshu Varshney",
//     class: "10th",
//     marks: {
//         Math: 80,
//         Science: 90,
//         Physics: 90,
//         Hindi: 95,
//         English: 70,
//     }
// };
// const details = Object.entries(obj);
// for (let [key, value] of details)
// {
//     if (typeof value === "object" && value !== null) {
//         console.log(`${key}: `);
//         for (const [subkey, subvalue] of Object.entries(value)) {
//             console.log(` ${subkey}:${subvalue}`);
//         }
//     }
//     else
//         console.log(`${key}:${value}`);
// }
// cart = [
//   {
//     name: "Butter Chicken",
//     price: 350,
//     qty: 2,
//     addons: ["Extra Butter:50", "Naan:40"],
//   },
// ];
// if (!Array.isArray(cart) || cart.length === 0) return null;
// const validItem = cart.filter((items) => items.qty > 0);
// const addonitems = cart.flatMap(({ addons }) =>
//   addons.map((items) => items.split(":")),
// );
// console.log(addonitems);


// const st = arr.reduce((sum, ele) => sum + ele, 0);
let st=null, ram;
console.log(st);
console.log(ram);

const light = { golden: 50, multicolor: 40, white: 30 };
const color = "blue";
const rate = (light[color] || 35)
console.log(rate);