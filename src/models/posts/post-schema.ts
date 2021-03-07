import { Document, Schema } from "mongoose"

export const PostSchema = new Schema({
    id: Number,
    title: String,
    body: String
})

export interface IPost extends Document {
    id: number
    title: string,
    body: string
}