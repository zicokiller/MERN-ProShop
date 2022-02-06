import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Marc Richet",
    email: "mrichet@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Cécile Morhain",
    email: "cmorhain@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
