import mongoose, {Schema, Document} from "mongoose"

export const UserSchema = new Schema({
    name: String,
    email: String,
    passwordHash: String,
    age: Number
})

export interface IUser extends Document {
    name: string,
    email: string,
    passwordHash: string,
    age: number
}

export const UserModel = mongoose.model<IUser>('Users', UserSchema)