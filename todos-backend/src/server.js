const express = require("express");

const todos = [
  {
    id: 1,
    title: "Get Grocery",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Complete Homework",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Write some code",
    isCompleted: true,
  },
];
const app = express();

app.get("/todos", (req, res) => {
  res.json(todos);
});
app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
