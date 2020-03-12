const db = require("../models");

module.exports = function (app) {

app.post("/api/workouts", (req, res) => {
    console.log(req.body);
    db.Workout.create(req.body, (err, data) => {
      if (err) {
        console.log(err)
      }
      {
        res.send(data)
      }
    })
  });

app.get("api/workouts", (req, res) => {
    console.log(req.body);
    db.Workout.findAll({})
    .then(data => {
        res.json(data);
    });
});

// PUT

};