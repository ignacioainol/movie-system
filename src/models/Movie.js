const mongoose = require("mongoose");
const {Schema} = mongoose;

const MovieSchema = new Schema({
    name: {type: String, required: true},
    releaseDate: {type: Date},
    genre: {type: String, required: true},
},{ 
    timestamps: true
    ,versionKey: false 
});

module.exports = mongoose.model('Movie', MovieSchema);