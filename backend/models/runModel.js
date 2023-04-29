const mongoose = require('mongoose')

const runSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  date: {
    type: Date,
    required: true
  },
  //Total number of seconds ran
  runTime: {
    type: Number,
    required: true
  },
  //Distance in miles
  runDistance: {
    type: Number,
    required: true
  },
  //Total number of seconds ran per mile
  avgPace: {
    type: Number,
    required: true
  },
  //BPM
  avgHeartRate: {
    type: Number,
    required: true
  },
  //Active calories burned during run
  activeCalories: {
    type: Number,
    required: true
  },
  //Total calories burned during run
  totalCalories: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Run', runSchema)