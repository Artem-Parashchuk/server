import { Schema, model } from "mongoose";

const eventSchema = new Schema({
    title: String,
    description: String,
    date: String,
    organizer: String
})
export const Event = model("event", eventSchema)

