const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    totalDuration: {
        type: Number,
        default: 0
    },
    exercises: [{
        type: {
            type: String
        },
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }]
});

workoutSchema.methods.setTotalDuration = function(){
    let sumDuration = 0;
    for(const e of this.exercises){
        sumDuration += e.duration;
    }
    this.totalDuration = sumDuration;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;