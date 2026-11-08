const base = {
    name: "Himanshu",
    class: "high class",
    qaulification: "MCA"
};
const derived = {
    Blood: "o+"
}

derived.__proto__ = base; // legacy
Object.setPrototypeOf(base, derived);
console.log(derived.hasOwnProperty("Blood")); // true
console.log(derived.hasOwnProperty("name"));// false