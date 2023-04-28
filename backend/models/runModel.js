const mongoose = require('mongoose')

const runSchema = mongoose.Schema({
  date: Date,
  //Total number of seconds ran
  runTime: Number,
  //Distance in miles
  runDistance: Number,
  //Total number of seconds ran per mile
  avgPace: Number,
  //BPM
  avgHeartRate: Number,
  //Active calories burned during run
  activeCalories: Number,
  //Total calories burned during run
  totalCalories: Number,
})

module.exports = mongoose.model('Run', runSchema)