// Assignment 1
// Create a type IsNumber<T> .
// Create a type ExtractEmail<T> that extracts email type if present.



type IsNumber<T>=T extends number ? true:false;

type number1 = IsNumber<number>;
type not = IsNumber<string>;

type Email = `${string}@${string}.${string}`;

type ExtractEmail<T> = T extends Email ? true : false;