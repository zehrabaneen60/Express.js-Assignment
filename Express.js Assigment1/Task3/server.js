const express = require("express");
const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
    res.send("All users retrieved");
});

app.post("/users", (req, res) => {
    res.send("New user created");
});

app.put("/users", (req, res) => {
    res.send("User updated");
});

app.patch("/users", (req, res) => {
    res.send("User email updated");
});

app.delete("/users", (req, res) => {
    res.send("User deleted");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});