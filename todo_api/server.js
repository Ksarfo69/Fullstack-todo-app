const express = require('express');
const cors = require('cors');
require('dotenv').config()
const user_routes = require('./router/user_routes')

const app = express();
app.use(cors());
app.use(express.json());

PORT = process.env.PORT || 5000;

app.use(user_routes)



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${5000}`)
})




