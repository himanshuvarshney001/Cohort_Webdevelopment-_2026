// // three types of string declaration
// const type1 = "Himanshu";
// const type2 = 'Himanshu';
// const type3 = `Himanshu`;// template literals or string interpolation
// const type4 = String("String");
// const type5 = new String("string object");// string object
// console.log(typeof type4);

// there are two ways for accessing indivisual character
// "himanshu".charAt(1);//i
// "himanshu".at(2);// m
// "himanshu".charAt(99);//space print
// const str = "himanshu";
// console.log(str[99]);// print undefined

//difference betweeen string object and primitive string
// const s1 = "2 + 2+2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// try {
//     console.log(eval(s1));
// } // returns the number 4
// catch (e) {
//     console.log("error!");
// }
// console.log(eval(s2)); // returns the string "2 + 2"


// Concatination
// const str1 = "hello";
// const str2 = "World";
// const result = str1.concat(", ", str2);
// console.log(result);
// const str3 = "by Javascript";
// const result1 = str1.concat(", ",str2," ",str3);
// console.log(result1);
// const arr = ["himanshu", "varshney", "harsh", "Varshney"];
// const result2 = "".concat(...arr);
// console.log(result2);

// How to check a particular substring are exist or not
// indexof() five first occurnce of substring
// lastIndexOf() give last occurance of substring
// const str = "Himanshu Varshney";
// console.log(str.indexOf("Varshney"));// give first occurance of substring
// console.log(str.indexOf("harsh"));// if not exist give -1

// const str = "himanshu";
// for (const ch of str) {
//     console.log(ch);
// }
// const str1 = "himanshu";
// for (const [key,value] in str1) {
//     console.log(str1[key]);
// }

// function prac(){
//     let count = 0;
//     function displayName() {
//         console.log(count);
//     }
//     return displayName;
// }
// const display = prac();
// display();

// let str = "   Hello    this   is himanshu    varshney   Ka ki KO";
// str = str.trim();
// const same = ["ka", "ke", 'ki', "se", "aur", "ya", "the", "of", "in", "a", "an"];
// str = str.split(" ").filter((w) => w.length > 0).map((ele) => {
//     if (same.indexOf(ele.toLowerCase()) !== -1) {
//         return ele.toLowerCase();
//     }
//     else return ele.slice(0,1).toUpperCase() + ele.slice(1).toLowerCase();
// }).join(" ");
// console.log(str);

