// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// Create a utility NonNullableFields<T> that removes null and undefined from all properties.
// Apply both to User and test different scenarios.


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}


type ReadonlyByKeys<T, K extends keyof T> =
    Omit<T, K> & {
        readonly [P in K]: T[P];
    };