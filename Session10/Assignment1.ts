// Assignment 1
// Create a generic function called wrapInArray that accepts any value and returns it inside an
// array.
// Create a generic interface PaginatedResponse<T> with properties:
// items: T[]
// total: number


function wrapInArray<T>(value:T):T[]{
    return [value];
}

interface PaginatedResponse<T>{
    items:T[];
    total:number;
}