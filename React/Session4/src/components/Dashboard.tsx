type User = {
  name: string;
  role: string;
};

export default function Dashboard({ user }: { user: User | null }) {
  return (
    <>
    <h1>Hello {user?.name}</h1>
    <h1>Role:{user?.role}</h1>
    </>
  );
}