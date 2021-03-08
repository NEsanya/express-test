import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"

const app = express()
const port = process.env.EXPERESS_TEST_PORT || 3500

app.use(bodyParser.json())

import posts from "./controllers/post"
import users from "./controllers/user"
app.use(posts)
app.use(users)

async function start() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(port, () => console.log(`Started on http://localhost:${port}`))

    } catch(e) { console.log(e) }
}
start()