import { Router } from "express"
import { UserModel } from "../models/users/user-chema"

const router = Router()
const cryptAddon = require("../../addons/lib/index")

router.post("/users/", async (req, res) => {
    try {
        if(!req.body.password || !req.body.name || !req.body.email || !req.body.age) res.status(400).send("Error, request body has mistakes")
        else {
            const passwordHash = cryptAddon.hash(req.body.password)
            const user = new UserModel({name: req.body.name, email: req.body.email, passwordHash: passwordHash, age: Number.parseInt(req.body.age)})
            user.save()
            res.status(200).json({ name: req.body.name, email: req.body.email, age: Number.parseInt(req.body.age) })
        }
    } catch(e) { console.log(e) }
})

router.get("/users/:name", async (req, res) => {
    try {
        const user = await UserModel.findOne({name: req.params.name})
        if(user) {
            res.status(200).json({name: user.name, email: user.email, age: user.age})
        } else {
            res.status(404).json({error: "User not found"})
        }
    } catch(e) { console.log(e) }
})

router.post("/users/login/:name", async (req, res) => {
    try {
        const user = await UserModel.findOne({name: req.params.name})
        if(user) {
            if(cryptAddon.verify(req.body.password, user.passwordHash)) {
                res.status(200).json({name: user.name, email: user.email, age: user.age, access: true})
            } else {
                res.status(403).send("Access denied")
            }
        } else {
            res.status(404).json({error: "User not found"})
        }
    } catch(e) { console.log(e) }
})

export default router