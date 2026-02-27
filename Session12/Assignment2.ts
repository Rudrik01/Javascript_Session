// Assignment 2
// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .

type Farg<T> = T extends (arg1:infer A,...arg:any[])=>any? A:never;
function user(id:number, active:boolean){
    return id;
};
type getuser= Farg<typeof user>;