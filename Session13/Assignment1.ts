// Assignment
// Create a PaymentState discriminated union.
// Add exhaustive checking to handle all states.
// Create a generic ApiResponse<T> for products.
// Write a type guard to check if response is success.
type PaymentState =
  | { status: "pending" }
  | { status: "processing" }
  | { status: "completed"; transactionId: string }
  | { status: "failed"; error: string };



function handlePayment(state: PaymentState) {
  switch (state.status) {
    case "pending":
      console.log("Payment pending");
      break;

    case "processing":
      console.log("Payment processing");
      break;

    case "completed":
      console.log("Payment completed:", state.transactionId);
      break;

    case "failed":
      console.log("Payment failed:", state.error);
      break;

    default:
      const exhaustiveCheck: never = state;
      return exhaustiveCheck;
  }
}


type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string };


// Product type
type Product = {
  id: number;
  name: string;
  price: number;
};



function isSuccess<T>(
  response: ApiResponse<T>
): response is { status: "success"; data: T } {
  return response.status === "success";
}


function fetchProducts(): ApiResponse<Product[]> {
  if (Math.random() > 0.5) {
    return {
      status: "success",
      data: [
        { id: 1, name: "Laptop", price: 70000 },
        { id: 2, name: "Phone", price: 30000 }
      ]
    };
  } else {
    return {
      status: "error",
      message: "Failed to fetch products"
    };
  }
}


const response = fetchProducts();

if (isSuccess(response)) {
  response.data.forEach((p) => {
    console.log(p.name, p.price);
  });
} else {
  console.log(response.message);
}


const payment: PaymentState = {
  status: "completed",
  transactionId: "TXN123"
};

handlePayment(payment);