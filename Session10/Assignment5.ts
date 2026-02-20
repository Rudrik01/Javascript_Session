// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.

type ReadOnlyUser = {
    readonly id:number;
    readonly name:string;
    readonly email:string;

}


type StringifiedUser ={
    [K in keyof ReadOnlyUser]:string;
}

type OptionalAndNullableUser={
    [K in keyof ReadOnlyUser]?:ReadOnlyUser[K] | null;
}