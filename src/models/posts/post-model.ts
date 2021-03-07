import mongoose from "mongoose";
import { IPost, PostSchema } from "./post-schema";


export const PostModel = mongoose.model<IPost>('Post', PostSchema);