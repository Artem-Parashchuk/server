import { Schema, model } from "mongoose";

const usersSchema = new Schema({
    userName: String,
    userEmail: String,
    userBirth: Date,
    event: String
})
export const User = model("User", usersSchema)