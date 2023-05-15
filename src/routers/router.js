import express from "express";
import Post from "../models/Post.js";

const posts = [{
        id: 1,
        title: "Title 1"
    },
    {
        id: 2,
        title: "Title 2"
    }
]

const route = express.Router();

route.get('/', (req, res) => {
    res.send("<h1>Main page</h1>")
})

route.get("/posts", (req, res) => {
    Post.find((err, post) => {
        res.json(post)
    })
})

route.get("/posts/:id", (req, res) => {
    const {id} = req.params;
    const dice = posts.find(post => id == post.id)
    res.json(dice);
})

route.post("/posts", (req, res) => {
    posts.push(req.body);
    res.send("Post adicionado.")
})

route.put("/posts/:id", (req, res) => {
    const {
        id
    } = req.params;
    const index = posts.findIndex(post => id == post.id)
    posts[index].title = req.body.title
    res.send("Post atualizado.")
})

route.delete("/posts/:id", (req, res) => {
    const {id} = req.params;
    const index = posts.findIndex(post => id == post.id)
    posts.splice(index, 1);
    res.send("Posts deletado.")
})



export default route;