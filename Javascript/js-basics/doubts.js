function greet()
{
  return new Promise((res, rej) => {
    res("Rohit");
    rej("error");
  })
}

console.log(greet().then(console.log));