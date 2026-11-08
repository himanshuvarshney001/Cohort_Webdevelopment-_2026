// function increment(value)
// {
//     this.age += value;
// }
// function print()
// {
//     console.log(`hi my name is ${this.name} and my age ${this.age}`);
// }
// function print1(obj)
// {
//     console.log(`hi my name is ${obj.name} and my age is ${obj.age}`);
// }
// const obj = {
//     name: "Himanshu",
//     age: 20
// };
// print.call(obj);
// print1(obj); 

// 'use strict'
// console.log(this);
// console.log(globalThis);


// "use strict"
// console.log(this);
// function greet()
// {
//     console.log(this);
// }
// greet();

// const filmDirector = {
//     name: "Sanjay Leela Bhanashali",
//     cast: ["Ranveer", "Deepika", "Priyanka"],
//     introduce() {
//         console.log(this);
//         this.cast.forEach((cast) => {
//             console.log(`${this.name} introduce ${cast}`);
//         });
//     }
// }
// const filmDirector1 = {
//     name: "Sanjay Leela Bhanashali",
//     cast: ["Ranveer", "Deepika", "Priyanka"],
    
//     introduce: () => {// this is arrow function it is not known what is this so its check outer scope
//         this.cast.forEach((actor) => console.log(`${this.name} introduce ${actor}`));
//     }
// }
// filmDirector1.introduce();

// const filmset = {
//     crew: "spot boys",
//     prepareprops() {
//         console.log(`outer this.crew: ${this.crew}`);
//         function arrangeChairs() {
//             console.log(`inner this.crew ${this.crew}`);
//         }
//         arrangeChairs();
//         const arrangeLights = () => {
//             console.log(`Arrow this.crew :${this.crew}`);
//         };
//         arrangeLights();
//     }
// };
// filmset.prepareprops();

const actor = {
    name: "Ranveer",
    bow() {
        console.log(this);
        return `${this.name} take a bow`;
    }
}
// console.log(actor.bow());
// detached funtion
// const detachedBow = actor.bow;
const bindfunc = actor.bow.bind(actor);
// console.log(detachedBow());
console.log(bindfunc());

[1,2,3].f