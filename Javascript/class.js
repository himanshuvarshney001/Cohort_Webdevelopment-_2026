class crickter{
    constructor(name, role, age) {
        this.name = name;
        this.role = role;
        this.age = age;
    }
    introduce() {
        return `name:${this.name} | role:${this.role} | age: ${this.age}`;
    }
};
const player1 = new crickter("Rohit", "Batsman", 34);
const player2 = new crickter("Virat", "Batsman", 34);

console.log(player1.hasOwnProperty("name"));
console.log(player1.hasOwnProperty("introduce"));
console.log(player1);

console.log(typeof crickter); // class is only sytatic sugar it all function

class debudant{
    constructor(name, role)
    {
        this.name = name;
        this.role = role;
        this.walkOut = () => `${this.name} walk out to bat for first time`;
    }
}
const debudant1 = new debudant("Vaibav Shuryavanshi");
const somethingFromLastClass = debudant1.walkOut;
console.log(somethingFromLastClass());//detached function
  