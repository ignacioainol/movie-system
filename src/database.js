require('dotenv').config();
const  mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/movie-db-app')
.then(db => console.log('DB is connected'))
.catch(console.log);
