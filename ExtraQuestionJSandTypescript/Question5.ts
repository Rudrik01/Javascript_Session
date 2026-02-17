// ⭐ TypeScript Question 5 (Union Thinking)

// Create a function:

// function formatId(id: number | string): string


// Behavior:

// If number → prefix "EMP-"
// If string → return uppercase

// Example:

// formatId(12) → EMP-12
// formatId("ab1") → AB1


// 👉 Tests type narrowing.

// VERY frequent question.



function formatId(id: number | string): string{
    if(typeof id ==="number"){
        return "Emp-"+id;
    }
    return id.toUpperCase();
}
