// Assignment 3
// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string

function format(input: number): string;
function format(input: Date): string;
function format(input: number | Date): string {
  if (typeof input === "number") {
    return  input.toFixed(2);
  } else if (input instanceof Date) {
    return input.toLocaleDateString();
  }
  throw new Error("Invalid input type");
}
console.log(format(123.456));
console.log(format(new Date()));