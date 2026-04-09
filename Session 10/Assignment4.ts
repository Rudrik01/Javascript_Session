// Assignment 4: Intersection Types
// Create an Order using intersection ( & )
// Create the same model using interfaces and extends
// Remove one required property and observe the compiler error
// Decide which approach feels clearer and why
// Create two small object types and combine them using intersection ( & )
// Create the same structure using interfaces and extends
// Try removing a required property and observe the compiler error
// Identify when intersection is better than union

type OrderBase = {
  orderId: number;
  amount: number;
};
type Auditable = {
  createdAt: Date;
  createdBy: string;
};
type Order = OrderBase & Auditable;




interface BaseOrder {
  orderId: number;
  amount: number;
}
interface AuditedOrder extends BaseOrder {
  createdAt: Date;
  createdBy: string;
}


/*
Missing "createdBy"


const order: Order = {
  orderId: 101,
  amount: 250,
  createdAt: new Date()
};

Property 'createdBy' is missing in type 
'{ orderId: number; amount: number; createdAt: Date; }'
but required in type 'Auditable'.

*/




/*

Decide which approach feels clearer and why

Both approaches work similarly, but interfaces feel clearer when defining object structures. Using extends naturally shows a relationship between types, making the code easier to read and understand. For example, AuditedOrder extends BaseOrder clearly indicates that it builds on the base order with extra fields.

The intersection (&) operator is powerful  but it can be less descriptive and sometimes harder to read in complex cases. So, I prefer interfaces for object inheritance and type aliases for unions or more complex type combinations.

*/