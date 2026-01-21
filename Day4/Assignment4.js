// 4. Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.
// Requirements:
// It must handle nested objects.
// It must handle nested arrays.
// It must not copy functions by reference (they can remain shared, but the object structure must be unique).





function masterClone(input){
    if(typeof input!="object" || input===null){
        return input;
    }
    const copy=Array.isArray(input)?[]:{};
    
    const keys=Object.keys(input);
    for(let key of keys){
        copy[key]=masterClone(input[key]);
    }
    return copy;
};


const original = {
  name: "rudrik",
  details: { 
    age: 22, 
    hobbies: ["cricket", "coding"] // Nested Array
  },
  greet: function() { console.log("Hi"); } // Function
};

const clone = masterClone(original);
console.log(clone);
// TEST 1: Modify the clone's nested array
clone.details.hobbies.push("garba");

// RESULT:
console.log(original.details.hobbies); 
// Output: ["chess", "coding"]

console.log(clone.details.hobbies); 
// Output: ["chess", "coding", "dancing"] 

// TEST 2: Functions are shared (not deep copied, per JS nature)
console.log(original.greet === clone.greet); 
// Output: true (This satisfies your requirement to keep them shared)