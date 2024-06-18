import express from 'express'
// import bodyParser from 'body-parser'
import initWebRoutes from './route/web'
import connectDB from './config/connectDB'
import cors from "cors"
import bodyParser from 'body-parser'
require('dotenv').config()

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", 'GET', 'PUT', "DELETE"]
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


initWebRoutes(app)

connectDB();

const port = process.env.PORT || 8080;

const listener = app.listen(port, () => {
    console.log(`Server is running on the port ${listener.address().port}`)
})