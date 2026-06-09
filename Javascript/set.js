// how to make set in javascript
const uniqueItem = new Set([]);
uniqueItem.add(1);
uniqueItem.add(2);
uniqueItem.add(3);

const uniqueItem1 = new Set([1, 2, 3, 4, 5]);
console.log(uniqueItem1);

// set from Array;
const arr = [1, 2, 3, 4, 4, 5, 1, 7];
const uniqueItem3 = new Set(arr);
const uniqueItem2 = new Set([...arr, 4, 5]);
console.log(uniqueItem2);//1,2,3,4,5

const uniqArr = [...uniqueItem2];
console.log(uniqArr);

// intersection of two set
const set1 = new Set([1, 2, 3, 4, 5, 6]);
const set2 = new Set([4, 2, 4, 5, 6, 8, 9, 0]);

const intersection = new Set([...set1].filter((value) => set2.has(value)));
console.log(intersection);