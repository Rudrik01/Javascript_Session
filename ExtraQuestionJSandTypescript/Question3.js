// ⭐ Async Question 3 (Dependency Trap — VERY IMPORTANT)

// You are given:

// fetchUser()
// fetchOrders(userId)

// Orders depend on the user.

// Task:

// Return:

// {
//  name,
//  orderCount
// }

// ⚠️ Hidden Test:

// Do NOT use Promise.all incorrectly.

// Many candidates do.

// This question checks if you understand dependency vs concurrency.

// VERY loved by interviewers.

async function fetchData() {
  try {
    const user = await fetchUser();
    const orders = await fetchOrders(user.id);
    return {
      name: user.name,
      orderCount: orders.length,
    };
  } catch (err) {
    console.log(err);
  }
}
