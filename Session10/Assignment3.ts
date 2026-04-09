// Assignment 3
// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.

function updateField<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value;
    console.log(`Updated ${String(key)} to:`, value);
}


const userProfile = {
    name: "Alex",
    age: 30,
    isActive: true
};

console.log("Before update:", userProfile);


updateField(userProfile, "name", "Blake");
updateField(userProfile, "age", 31);       
updateField(userProfile, "isActive", false);

console.log("After update:", userProfile);