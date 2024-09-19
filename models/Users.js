import { Schema, model } from "mongoose";

const usersSchema = new Schema({
    name: String,
    email: String,
    birthday: Date
})
export const User = model("user", usersSchema)