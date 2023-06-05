const mongoose = require('mongoose')
const Workout = require('../routes/workouts')
  
const Schema = mongoose.Schema


const workoutSchema = new Schema({
    title:{
        type:String,
        required:true

    },
    reps: {
        type:Number,
        reuired: true
    },
    load:{
        type: Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Workout', workoutSchema)

