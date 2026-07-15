// For loop
// for loop: Best when you know exactly how many times you want to run the code.
console.log("--------For loop----- ");
for (let i = 0; i < 10; i++)// run n+1 times
{
    console.log(i);
}


// Do while loop
console.log("--------Do while------");
let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);


// While loop
console.log("--------while Loop------");
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

// for...of loop: Directly iterates over the values of an iterable object like arrays, strings, maps, or sets.
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(color); // Logs: 'red', 'green', 'blue'
}

// for...in loop: Iterates over the enumerable property keys of an object. It should generally be avoided for array indexing because it iterates over string keys and prototype chain properties.
const user = { name: 'Alice', age: 25 };
for (const key in user) {
  console.log(`${key}: ${user[key]}`); // Logs: "name: Alice", "age: 25"
}


// Array prototype method
// While technically high-order functions rather than language keyword loops, these native array tools handle looping over collections declaratively

// forEach(): Executes a callback function once for every element in the array.
const items = ['apple', 'banana'];
items.forEach((item) => console.log(item));



// map(): Iterates through an array and returns a completely new array populated with the results of your callback function.
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
