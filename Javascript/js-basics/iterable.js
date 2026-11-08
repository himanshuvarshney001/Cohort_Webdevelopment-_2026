const playList = {
    songs: ["Bhadshah", "aapki kripa"],
    from: 0,
};



const arr = [1, 2, 3, 4];

console.log(playList[Symbol.iterator]);// in object there is no iterable method so implement it for iterating the object
console.log(arr[Symbol.iterator]);

playList[Symbol.iterator] = function () {
    const songs = this.songs;
    let curr= this.from;
    return {  // this object is known as iterator object
        next() {
            if (curr < songs.length)
                return { done: false, value: `Now playing : ${songs[curr++]}` };
            return { done: true };
        }
    }
}

// Concepetually javascript kuch aisa karta hai
 
// const iterator = playList[Symbol.iterator]();
// let result = iterator.next();
// while (!result.done) {
//     const obj = result.value;
//     console.log(obj);
//     result = iterator.next();
// }


for (const obj of playList)
{
    console.log(obj);
}