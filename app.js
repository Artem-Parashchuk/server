import { initMongoDB } from "./initMongoDB.js"
import { startServer } from "./startServer.js"


const bootstrap = async () => {
    await initMongoDB()
    startServer()
}
bootstrap()