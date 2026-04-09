// ✅ Q6 — Function Overloading (Exam Favorite)

// Create overloads for:

// reverse(value)


// Behavior:

// string → reversed string
// number → reversed digits


// Example:

// reverse("abc") → "cba"
// reverse(123) → 321


// ⚠️ Must use overload signatures.

type UserType=string | number;

function reverseTemplate(value:UserType){
    if(typeof value==="number"){
        return Number(value.toString().split("").reverse().join(""));
    }
    return value.split("").reverse().join("");
}


console.log(reverseTemplate("Hurrah"));

console.log(reverseTemplate(123));