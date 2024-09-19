import mongoose from "mongoose";

const {DB_HOST} = process.env
 
export const initMongoDB = async () => {
    try{
        await mongoose.connect(DB_HOST)
        console.log("Successfully connection to MongoDB")

    }catch(error) {
        console.log(`Connecting error ${error.message}`)
        throw error
    }
}