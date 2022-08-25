const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require("morgan");
const rootRoute = require('./routes/index')
dotenv.config()
require('./db/Connection')

app.use(express.json())
app.use(morgan("dev"))
app.use('/api/v1', rootRoute)

app.get('/', (req, res) => {
    res.send('{netflix backend server is running}')
})

app.listen(4000, () => {
    console.log('Backend server is running 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥');
})