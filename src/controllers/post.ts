import { Router } from "express"
import { PostModel } from "../models/posts/post-model"
const router = Router()

router.get("/posts/:id", async (req, res) => {
    try{
        PostModel.findOne({id: Number.parseInt(req.params.id)}, (_err: any, obj: any) => {
            if(!obj) res.json({err: "Post not found"})
            res.json(obj)
        })
    } catch(e) { console.log(e) }
})

export default router