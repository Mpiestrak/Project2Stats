// requirements: import mongoose
const mongoose = require('mongoose')


// When it connects, then console.log "Connected to MongoDB"
mongoose.connect("mongodb://localhost/project2").then(() => {
  console.log("Mongo DB is running")
})

// export your mongoose connection
module.exports = mongoose;