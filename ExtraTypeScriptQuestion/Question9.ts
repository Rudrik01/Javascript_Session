// ✅ Q9 — Deep Readonly

// Create a type:

// DeepReadonly<T>


// That makes ALL nested properties readonly.

// Example:

// type User = {
//  name:string;
//  address:{
//    city:string;
//  }
// }


// After applying:

// 👉 NOTHING should be mutable.

// ⚠️ This is a mapped type test.



type DeepReadonly<T>={
    readonly[K in keyof T]:T[K] extends object ?  DeepReadonly<T[K]>:T[K];
}

type User = {
    name: string;
    address: {
        city: string;
    };
};

const user: DeepReadonly<User> = {
    name: "Alex",
    address: {
        city: "Mumbai"
    }
};

// All should error
// user.name = "Bob";
// user.address.city = "Delhi";
