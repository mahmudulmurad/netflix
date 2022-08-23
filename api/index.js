const express = require('express')
const app = express()
const dotenv = require('dotenv')
const authRoute = require("./routes/Auth")
dotenv.config()
require('./db/Connection')

app.use(express.json())
app.use("/api/v1/auth", authRoute)

app.listen(4000, () => {
    console.log('Backend server is running 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
})