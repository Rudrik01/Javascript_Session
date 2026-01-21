    // 1. Predict the output and explain the memory state.
    // const registry = {
    //   active: [{ id: 1, name: "Alpha" }],
    //   archived: []
    // };

    // function cloneAndModify(data) {
    //   // Goal: Create a copy so the original registry isn't changed
    //   const copy = { ...data };
    
    //   copy.active.push({ id: 2, name: "Beta" });
    //   copy.active[0].name = "Gamma";
    //   copy.version = 2.0;
    
    //   return copy;
    // }

    // const newRegistry = cloneAndModify(registry);

    // console.log(registry.active.length); // ?
    // console.log(registry.active[0].name); // ?
    // console.log(registry.version);       // ?








const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // 2
console.log(registry.active[0].name); // Gamma
console.log(registry.version);       // undefined








/*First the registry object has two array named as "active and archived".so when the object is the the address of this two array is stored in the stack memory 
and all the data of that array is stored in heap memory.

now we made a function of cloning and modifying the object.On function call at line number 47 the function make the shallow copy of the registry object
so all the properties are copied but the catch is that the address of the array is stored is stored in the stack so the address is copied. So both the object still points the same array.


now inside the function we are pushing the data into the array it will go to that address of heap and the data is pushed.

in the next very line it is try to access the first element of the array of the new object and updated the name to "Gamma" so it will be updated in the heap so the parent object will also show reflection.

After that it is trying to update the version but the parent object has no version field so it shows undefined.

therefore the output is as follows:
2
Gamma
undefined

*/