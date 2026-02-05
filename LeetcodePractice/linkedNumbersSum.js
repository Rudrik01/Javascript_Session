// 32.linkedNumbersSum
// Write a function named linkedNumbersSum that receives one parameter

// an object representing the start node of a linked list. It has 2 properties:
// value - representing a number
// next - representing the next node in the linked list (or null if there is no next node)
// The function should return the sum of all the numbers in the linked list.

// Example 1
// Input
// node

// =
// {…}
// next: {…}
// next: { next: null, value: 3 }
// value: 2
// value: 1
// <prototype>: Object
// Output
// 6
// Explanation
// We have a linked list with 3 nodes. The sum of the values of the nodes is 6.



function linkedNumbersSum(node) {
    let sum=0;
    let temp=node;
    while(temp){
        sum+=temp.value;
        temp=temp.next;
    }
    return sum;
}

export { linkedNumbersSum };

