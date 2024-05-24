
const express = require('express')
const mysql  = require("mysql")
const cors  = require("cors")

const app = express()
app.use(cors())


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'cuahangtrasua',
})

app.get("/",(req,res) =>{
        return res.json();
    })

app.listen(8080, ()=>{
    console.log("Listening....")
})
