// ✅ Async + TypeScript + Promise.all
// Problem:

// Write a TypeScript function:

// getDashboard(userId:number)


// It should fetch:

// ✅ user
// ✅ posts
// ✅ todos

// Return:

// {
//    userName:string,
//    postCount:number,
//    todoCount:number
// }

// APIs (simulate):
// fetchUser(id) -> {id, name}
// fetchPosts(id) -> Post[]
// fetchTodos(id) -> Todo[]

// 🚨 REQUIREMENTS

// ✅ Use Promise.all
// ✅ Strong typing
// ✅ async/await
// ✅ No sequential awaits


type User ={
    id:number;
    name:string;
}
type Post={
    id:number;
}
type Todo={
    id:number;
}

type ApiResponse={
    userName:string;
    postCount:number;
    todoCount:number
}


async function fetchData(userId:number):ApiResponse{
    const [user,posts,todos]=await Promise.all([
        fetchUser(userId),
        fetchPost(userId),
        fetchTodo(userId)

    ]);

    return {
        userName=user.name,
        postCount =posts.length,
        todos=todos.length
    };

}