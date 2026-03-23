// 34.removeFirstAndLast
// Write a function named removeFirstAndLast that receives 2 parameters:

// a string named source
// another string named target
// and returns a new string created by removing from source the first and last appearances of target.

// Example 1
// Input
// source

// =
// "Hello World"
// target

// =
// "l"
// Output
// "Helo Word"
// Example 2
// Input
// source

// =
// "Hello!"
// target

// =
// "Hello!"
// Output
// ""
function removeFirstAndLast(source, target) {

    const first = source.indexOf(target);
    const last = source.lastIndexOf(target);

   
    if (first === -1) return source;

    if (first === last) {
        return source.slice(0, first) + source.slice(first + target.length);
    }

    return (
        source.slice(0, first) +
        source.slice(first + target.length, last) +
        source.slice(last + target.length)
    );
}

export { removeFirstAndLast };
