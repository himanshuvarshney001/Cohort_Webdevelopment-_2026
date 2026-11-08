function arr()
{
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));
    console.log(arguments);
    const arg = Array.from(arguments);// convert when object is iterable
    console.log(arg);
    for (let args of arguments)
        console.log(args);
}
arr(1, 2, 3, 4);