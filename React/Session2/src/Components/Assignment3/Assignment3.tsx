/*
3. **useEffect dependency**
Build a small “user by ID” viewer: one state for `userId`, one for `user`. Use `useEffect` to fetch when `userId` changes. Include cleanup so that if the request finishes after `userId` changed or the component unmounted, you don’t call `setUser`.
*/
import { useEffect, useState } from "react";
type User = {
  firstName: string;
  email: string;
};
export default function Assignment3() {
  const [user, setUser] = useState<User | null>(null);
  const [userId, setUserId] = useState<number>();
  useEffect(() => {
       if (!userId) return;


    async function fetchUser() {
      const res = await fetch(`https://dummyjson.com/users/${userId}`);
      const data = await res.json();
  
      setUser(data);
    }

    fetchUser();
  }, [userId]);

  return (
    <>
      <label htmlFor="id">Enter userId: </label>

      <input
        name="userId"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
      />
      {user && (
        <>
          <h3>User Info</h3>
          <p>Name: {user.firstName}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </>
  );
}
