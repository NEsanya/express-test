import { Router } from "express"
import { PostModel } from "../models/posts/post-schema"
const router = Router()

router.get("/posts/:id", async (req, res) => {
    try{
        const post = await PostModel.findOne({id: Number.parseInt(req.params.id)})
        if(post) {
            res.status(200).json({id: post.id, title: post.title, body: post.body})
        } else {
            res.status(404).json({error: "Post not found"})
        }
    } catch(e) { console.log(e) }
})

router.patch("/posts/:id", async (req, res) => {
    try {
        await PostModel.updateOne({id: Number.parseInt(req.params.id)}, {id: Number.parseInt(req.params.id), ...req.body})
        res.status(200).json({id: Number.parseInt(req.params.id), ...req.body})
    } catch (e) { console.log(e) }
})

router.post("/posts", async (req, res) => {
    try {
        const lastPost = await PostModel.findOne().sort({ field: 'asc', _id: -1 }).limit(1)
        let id: number
        if(lastPost) {
            id = lastPost.id + 1
        } else { id = 0 }
        if(!req.body.title || !req.body.body) {
            res.status(400).json({ error: "Title or body not found" })
        } else {
            const post = new PostModel({id: id, ...req.body})
            post.save()
            res.status(200).json(req.body)
        }
    } catch(e) { console.log(e) }
})

router.delete("/posts/:id", async (req, res) => {
    try {
        await PostModel.deleteOne({id: Number.parseInt(req.params.id)})
        res.send("OK")
    } catch(e) { console.log(e) }
})

export default router