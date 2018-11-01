// requirements: import mongoose
require('dotenv').config();
const mongoose = require('mongoose')



// When it connects, then console.log "Connected to MongoDB"
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB')
}) 

// export your mongoose connection
module.exports = mongoose;