// // Ways for log
// console.log("Himanshu Varshney");

// console.warn("This is a warning");

// console.error("This is a error message");

// console.time("Time start ");
// console.log("Himanshu Varshney");
// console.log("Harsh Varshney");
// console.log("Vandana Varshney");
// console.timeEnd("Time start ");

// console.group("grouping");
// console.log("Hiamanshu Varshney");
// console.log("Nirmal Sharma");
// console.log("Mayank Sharma");
// console.groupEnd();

// console.count("hello");
// console.count("hello");
// console.count("hello");

// const obj = {
//     name: "Himanshu",
//     course: "MCA",
//     college: "NIT JSR",
//     location: 'Jhamshedpur',
//     subject:{
//         Math: "Descrete",
//         CS: "computer",
//     },
// };
// console.log(typeof obj.subject);

// variable.js

// There are types of varable declaration
// var game = "Pubg" // two problem not block leaked outside {}, use before its declaration

// let nam = "Freefire";// block level and use after declartion

// const name = "Himanshu";//block level and initilize at declaration. cannot be reassinged

// const arr = ["Himanshu varshney", "Harsh Varshney", "Vandana Varshney"];
// console.log(Array.isArray(arr));
// arr.forEach((element) => console.log(element));

// console.log(typeof [].forEach);
// console.log(typeof function (){});
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof Array.isArray([]));
// console.log(typeof Array);

// copy of object
// const weapons = {
//     Riffles: 15,
//     Pistols: 16,
//     MachineGuns:18,
// };
// const weaponsCopy = weapons;// weaponscopy use the refrence of weapons.
// console.log(weapons);
// weaponsCopy.Riffles = 100;
// console.log(weapons);

// const weaponsCopy1 = { ...weapons }; // there is one problem that is note perform deep copy it is shallow copy. means object inside object not copy nested object used same memory of original one.
// console.log(weapons);
// weaponsCopy1.Pistols = 400;
// console.log(weapons);
// console.log(weaponsCopy1);

// const weapons = {
//     GunsName:["Riffile","Short Gun","Machine Gun","FlareGun"],
//     Riffles: 15,
//     Pistols: 16,
//     MachineGuns:18,
// };
// console.log("Original object=",weapons);
// const weaponsClone = structuredClone(weapons);// this is known as deep copy
// console.log("Clone object", weaponsClone);
// weaponsClone.GunsName[0] = "Fire Gun";
// console.log("Clone object", weaponsClone);
// console.log("Original object=",weapons);

// console.log(Number.isNaN("NaN"));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN("blabla"));
// console.log(Number.isNaN(true));
// console.log(Number.isNaN(null));
// console.log(Number.isNaN("37"));
// console.log(Number.isNaN("37.37"));
// console.log(Number.isNaN(""));
// console.log(Number.isNaN(" "));
// console.log(Number.isNaN(NaN));

// console.log(isNaN("NaN"));
// console.log(isNaN(undefined));
// console.log(isNaN({}));
// console.log(isNaN("blabla"));
// console.log(isNaN(true));
// console.log(isNaN(null));
// console.log(isNaN("37"));
// console.log(isNaN("37.37"));
// console.log(isNaN(""));
// console.log(isNaN(" "));
// console.log(isNaN(NaN));

// function for checking given input is number or not

// function isNumber(input)
// {
//     if (typeof input === "object")
//         return false;
//     if (input === null || typeof input==="undefined"|| typeof input === "boolean" ||(typeof input==="string" &&input.trim()==="") )
//         return false;
//     const inp = Number(input)
//     if (typeof inp === "number" && !Number.isNaN(inp))
//         return true;
//     else
//         return false;
// }
// console.log(isNumber(""));//false;
// console.log(isNumber("0"));//true
// console.log(isNumber(true));//false
// console.log(!isNaN(true));// true
// console.log(!Number.isNaN(true));//true typeof true===null retrurn false !false=true

// const fuelReading = "142.75tons";
// console.log(parseInt("111", 2));

// Math library
const arr = [1, 2, 3, 4, 5, 6];
console.log(Math.min(...arr));