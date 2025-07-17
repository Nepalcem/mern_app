import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
    res.send("you got 1 note");
});

app.listen(3000, () => {
    console.log("Server started on PORT 3000")
});

