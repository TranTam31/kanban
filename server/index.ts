import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import { verifyToken } from './src/middlewares/verifyToken'

import userRouter from './src/routers/user'
import storageRouter from './src/routers/storage'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', userRouter)

app.use(verifyToken)
app.use('/storage', storageRouter)

const dbURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.grk7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const connectDB = async () => {
    try {
        await mongoose.connect(dbURL)
        console.log('Connect to db success')
    } catch (error) {
        console.log(`Cannot connect to db ${error}`)
    }
}

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is starting at http://localhost:${process.env.PORT}`)
        })
    }).catch((error) => {
        console.log(error)
})