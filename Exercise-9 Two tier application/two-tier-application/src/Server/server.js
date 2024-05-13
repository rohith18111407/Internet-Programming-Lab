const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const data = [
 {
   name: "Alice",
   rollno: "A123",
   phone: "555-123-4567",
   email: "alice@example.com"
 },
 {
   name: "Bob",
   rollno: "B456",
   phone: "555-987-6543",
   email: "bob@example.com"
 },
 {
   name: "Charlie",
   rollno: "C789",
   phone: "555-555-5555",
   email: "charlie@example.com"
 },
 {
   name: "David",
   rollno: "D012",
   phone: "555-111-2222",
   email: "david@example.com"
 },
 {
   name: "Eva",
   rollno: "E345",
   phone: "555-333-4444",
   email: "eva@example.com"
 },
 {
   name: "Frank",
   rollno: "F678",
   phone: "555-666-7777",
   email: "frank@example.com"
 },
 {
   name: "Grace",
   rollno: "G901",
   phone: "555-888-9999",
   email: "grace@example.com"
 },
 {
   name: "Hannah",
   rollno: "H234",
   phone: "555-444-5555",
   email: "hannah@example.com"
 },
 {
   name: "Isaac",
   rollno: "I567",
   phone: "555-777-8888",
   email: "isaac@example.com"
 },
 {
   name: "Julia",
   rollno: "J890",
   phone: "555-222-3333",
   email: "julia@example.com"
 }
];

app.get("/message", (req, res) => {
 res.json(data);
});

app.listen(8000, () => {
 console.log("Server is running on port 8000.");
});
