// ⭐ Mixed Question 7 (MOST REALISTIC)

// You are given:

// fetchProducts(): Promise<
//  {id:number, price:number}[]
// >

// Task:

// Write:

// async function getTotalPrice():Promise<number>


// Return the total price of all products.

// RULES:

// ✅ Strong typing
// ✅ async/await
// ❌ no any



async function getTotalPrice():Promise<number>{
    try{
        const data=await fetchProducts();
        const total=data.reduce((acc,curr)=>{
            acc+=curr.price;
            return acc;
        },0);
        return total;

    }catch{
        console.log("Error in Fetching the product")
    }
}