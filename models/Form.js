import { Schema, model } from "mongoose";



const formSchema = new Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userBirth: { type: Date, required: true },
    event: { type: String, required: true },
})

export const Form = model('')