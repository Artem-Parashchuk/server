import mongoose from "mongoose";

export const initMongoDB = async () => {
    try{
        const DB_HOST = "mongodb+srv://Artem:12345678qwerty@eliftechcluster.r8w8y.mongodb.net/eliftech?retryWrites=true&w=majority&appName=EliftechCluster"
        await mongoose.connect(DB_HOST)
        console.log("Successfully connection to MongoDB")

    }catch(error) {
        console.log(`Connecting error ${error.message}`)
        throw error
    }
}