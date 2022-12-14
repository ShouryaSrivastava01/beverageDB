import express, { Request, Response } from "express";
import 'dotenv/config'
import 'express-async-errors'
import { connectDB } from "./db/connectDB";

const app = express()
const port = Number(process.env.PORT) || 5000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('hi mom')
})

const start = async (uri: string, port: number) => {
    try {
        await connectDB(uri)
        console.log('connected to db')
        app.listen(port, () => {
            console.log(`server listening to: ${port}`);
        })
    } catch (error) {
        console.log(error)
    }
}

start(process.env.MONGO_URI as string, port)
