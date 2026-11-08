// // function add(a, b){
// //     return a + b;
// // }
// function square(a)
// {
//     return a * a;
// }

// const cache = {};
// add(3, 4);// 10m call back this is only unotimize cpu usages
// square(3);// again 10m call this is cpu wastage

// // optimizing the function 
// const sqrCache = {};

// function add(a, b) {
//     const key = `${a}:${b}`;
//     if (Object.hasOwn(cache,key))
//     {
//         return cache[key];
//     }
//     cache[key] = a + b;
//     return cache[key];
// }


// closure
function optimizedFunction(kyaKarnaHai) {
    const cache = {}; //tifin
    return function (...args) {
        const key = JSON.stringify(args);
        if (Object.hasOwn(cache, key)) {
            return cache[key];
        }
        cache[key] = kyaKarnaHai(...args);
        return cache[key];
    };
}

function add(a, b)
{
    return a + b;
}
function square(a)
{
    return a * a;
}

const optimizedAdd = optimizedFunction(add);
const optimizedSquare = optimizedFunction(square);

console.log(optimizedAdd(4, 2));
console.log(optimizedSquare(4));

