// JS: Chunk an Array
// Write a function chunkArray(arr, size) that:
// Splits an array into smaller arrays (chunks) of a given size
// Returns a new array containing these chunks
// Uses reduce
// Uses slice OR index-based logic
// Does not use loops (for, while)


// Example:
// Input: ([1, 2, 3, 4, 5], 2)
// Output: [[1, 2], [3, 4], [5]]


// Contraints:
// size will always be greater than 0 Original array should not be mutated



function chunkArray(arr,size){
    return arr.reduce((acc,curr,index)=>{
        if(index%2===0){
            acc.push(arr.slice(index,index+size));
        }
        return acc; 
    },[]);
};

const input =[1, 2, 3, 4, 5];
const size=2;


console.log(chunkArray(input,size));