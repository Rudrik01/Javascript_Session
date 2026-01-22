// Q2. Reference Trap
// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// arr2.push(4);

// console.log(arr1.length); // ?
// console.log(arr2 === arr1); // ?


// 👉 Draw Stack vs Heap diagram.




const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);

console.log(arr1.length); //4
console.log(arr2 === arr1); // true


/*
    the array address is stored in stack memory and the data are stored in the heap memory so the variable arr1 stores the address and point to the heap memory 
    in next very line arr2 is declared and initialized to arr1 but the catch is that arr1 has address in it so address.So a copy of reference is created named arr2 
    but it stores the same address and point the same location in the heap memory. after that we are pushing data in arr2 but in pushing the data it will go the location in heap
    and push the data. it will also get reflected in arr1. therefore length of the arr1 now becomes 4 and as arr2 and arr1 has the same address so it arr2===arr1 returns true

*/