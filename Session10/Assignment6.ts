// Create a type UserPublicProfile without email and isActive .
// Create a Record that maps user IDs (string) to User objects.
type User = {
    id: number;
    name: string;
    email: string;
    isActive:boolean;
}


type UserPublicProfile=Pick<User,"id" | "email">

type UserMap = Record<string, User>;