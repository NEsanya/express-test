import mongoose from "mongoose"
import fetch from "node-fetch"
import { PostModel } from "../models/posts/post-schema"

mongoose.connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async _db => {
    await PostModel.insertMany(await ((await fetch("https://jsonplaceholder.typicode.com/posts")).json()))
    console.log("Success! Please, press ctrl + c")
})