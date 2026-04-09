// 1.Create a constant adminUser .

// 2.Create a type from it using typeof .
// 3.Add a new property and observe how the type changes automatically.

const adminUser = {
  id: 0,
  name: "admin",
  email: "admin@test.com",
  role: "admin",
  isActive: true,
};

type AdminUserType=typeof adminUser;



