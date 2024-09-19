import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { getEvents, getUser } from "./services/eventService.js";

dotenv.config()

export const startServer = () => {

    const app = express()
    
    app.use(cors())


    app.get("/api/users", async (req, res) => {
        const data = await getUser()
        res.status(200).json({
            status: 200,
            message: "Register people successfully",
            data
        })
    })

    app.get("/api/events", async (req, res) => {
        const data = await getEvents()
        res.status(200).json({
            status: 200,
            message: "Events get successfully",
            data
        })
    })

    
    
    const PORT = process.env.PORT 
    app.listen(PORT, () => console.log(`Сервер запущено на порту ${PORT}`))
}
