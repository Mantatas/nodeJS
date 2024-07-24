const app = require('./app')
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const mongoose = require('mongoose')

const port = process.env.PORT;

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB)
.then(con=>{console.log('connecteded to datababase')})
.catch(error=>{console.log(error)})

app.listen(port, ()=>{
    console.log('express started')
})