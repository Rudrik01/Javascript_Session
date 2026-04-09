// ✅ Q10 — Pick Without Pick 😄

// Recreate the built-in utility type:

// MyPick<T,K>


// Example:

// MyPick<User,"name">


// Should return:

// { name:string }


// 👉 Tests:

// keyof

// mapped types

// generics

// HIGH probability question.


type MyPick<T, K extends keyof T>={
    [P in K]:T[P];
}


type User = {
    name: string;
    age: number;
    role: string;
};


const user:User={
    name:"Alex",
    age:15,
    role:'developer'
}

type OnlyName = MyPick<User, "name" | "age">;


const OnlyType:OnlyName={
    name:"Bob",
    age:16
}
