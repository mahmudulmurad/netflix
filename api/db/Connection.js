const mongoose = require('mongoose')

//DB Connection

main().catch(err => console.log(err.message))

async function main() {
    await mongoose.connect(process.env.MONGODB_URL).then(() => { console.log("MongoDB connected 🔥") })
}