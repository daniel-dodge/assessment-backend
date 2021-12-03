const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.
const ctrl = require("./controller.js")
app.get("/api/compliment", ctrl.getCompliment);
app.get("/api/fortune", ctrl.getFortune)
app.post("/api/fortune", ctrl.addPost)
app.delete("/api/fortune", ctrl.clearPosts)
app.get("/api/fortune/list", ctrl.getList)
app.listen(4000, () => console.log("Server running on 4000"));
