const express = require('express')


const path = require('path')
const dotenv = require('dotenv').config()
const cors = require('cors')


const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const app = express()

 app.use(cors({
    origin:"*",
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
 }))
 app.use(express.json())
 app.use(express.urlencoded({extended:false}))

 app.get('/',(req, res)=> {
    res.send('Welcome to "Podium-AI-Backend App!')
    console.log('Welcome to "Podium-AI-Backend App!')
    })


 app.listen(PORT, ()=>{
    console.log(`This is express server running on port: ${PORT}`)
    console.log(`This is podium-ai-backend app`)
    })

connectDB() 