const express=require('express');
const mongoose = require('mongoose');
const routes=require('./routes/routes')
const cors = require('cors');

require('dotenv').config();
const app=express();
const mongoString = process.env.DATABASE_URL
app.use(cors());
app.use(express.json());
app.listen(8000,()=>{
     console.log(`Server Started at ${8000}`)
})

mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error',(error)=>{
    console.log(error)
})
database.once('connected',()=>{
    console.log("Database connected ")
})
app.use('/api',routes)
