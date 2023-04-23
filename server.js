const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

mongoose
    .connect("mongodb://127.0.0.1:27017/myPostsdb")
    .catch((err) => console.log(err));


const postSchema =mongoose.Schema({
    title: String,
    description: String
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
    res.send("express is here");
  });

app.post("/create", (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description
    })
    .then(doc => console.log(doc))
    .catch(err => console.log(err));
});
app.listen(3001, function () {
    console.log("Express Server is running");
})
