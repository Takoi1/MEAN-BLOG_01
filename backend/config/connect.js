const mongoose = require('mongoose');
require('dotenv').config();


const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl)
    .then(
        ()=>{
            console.log('connected')
        }
    )
    .catch(
        (error)=>{
            console.log(error)

    }
    )

    module.exports =mongoose;