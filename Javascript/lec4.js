// Assign the new property to object
const book = {
  title:"JavaScript Guide",
  page:300,
};
book.author = "john";
// book[author] = "John";// Not allowed
console.log(book);

// Create your product object
const product={
  name:"Laptop",
  price:999,
  stock:50,
}
// // Get the keys using Object.keys()
// console.log(Object.keys(product));
// const keys=[];
// for(let key in product)
// {
//   keys.push(key);
// }
// // Log the keys array
// console.log(keys);

// //log the values
// console.log(Object.values(product));

// Array of all pairs
const entries = Object.entries(product);
console.log(entries);
