const val=23;
console.log("Value of constant=", val);
const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => console.log(element));
const tt = arr.map((ele) => ele * 2)
console.log(tt);
const tt1 = map((ele) => ele * 2);
function map(ff)
{
    const arr1 = [];
    for (let i = 0; i < arr.length; i++)
    {
        const val = arr[i];
        const value = ff(val);
        arr1.push(value);
    }
    return arr1;
}
console.log(tt1);
const nums2 = [3, 4, 18, 20, 40];
const nums3 = nums2.forEach(function (ele)
{
    if (ele % 2 === 0)
    {
        console.log(ele);
    }
})
console.log("new arrat", nums3);

console.log(-0 === 0);
console.log(NaN === NaN);// We can fix it by same value algo
function sameValue(a, b)
{
    if (typeof a === "number" && typeof b === "number")
    {
        // x and y both are number or both are not
        return a===b || (a!==a && b!==b)
    }
    return a === b;
}
console.log(typeof NaN);