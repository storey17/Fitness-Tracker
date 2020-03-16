const db = require("../models");
const mongoose = require("mongoose");

module.exports = function(app){

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            for(const e of dbWorkout){
                e.setTotalDuration();
            }
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            const workoutWeek = (dbWorkout.length > 7 ? dbWorkout.slice(dbWorkout.length-7,dbWorkout.length) : dbWorkout);
            res.json(workoutWeek);
        })
        .catch(err => {
            res.json(err);
        })
    });

    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);
        db.Workout.update({_id: mongoose.mongo.ObjectId(req.params.id)}, {$push: {exercises: req.body}})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

};