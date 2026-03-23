// 30.diffArrays
// Write a function named diffArrays that receives 2 Arrays of numbers as parameters.

// The function should return a new Array, that contains all numbers from the first array that are not in the second one, and all numbers from the second array that are not in the first one.

// Example 1
// Input
// numbers1

// =
// Array(7)
// 0: 11
// 1: 96
// 2: 103
// 3: -5
// 4: 0
// 5: 12
// 6: 1
// <prototype>: (0) [ ]
// numbers2

// =
// Array(6)
// 0: 0
// 1: 1
// 2: 2
// 3: 3
// 4: 4
// 5: 5
// <prototype>: (0) [ ]
// Output
// Array(9)
// 0: 11
// 1: 96
// 2: 103
// 3: -5
// 4: 12
// 5: 2
// 6: 3
// 7: 4
// 8: 5
// <prototype>: (0) [ ]


function diffArrays(numbers1, numbers2) {
    let result=[];
    numbers1.forEach((num)=>{
        if(!numbers2.includes(num)){
            result.push(num);
        }
    });
    numbers2.forEach((num)=>{
        if(!numbers1.includes(num)){
            result.push(num);
        }
    });
    return result;
}

export { diffArrays };
