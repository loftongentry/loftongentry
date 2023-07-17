const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const Run = require('../models/runModel')
const User = require('../models/userModel')

//@desc   Get Runs
//@route  GET /api/runsData
//@access Private
const getRuns = asyncHandler(async (req, res) => {
  const runs = await Run.find({ user: req.user.id })

  const cumulativeTotals = await Run.aggregate([
    { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
    {
      $group: {
        _id: null,
        totalRunTime: { $sum: '$runTime' },
        avgRunTime: { $avg: '$runTime' },
        totalRunDistance: { $sum: '$runDistance' },
        avgRunDistance: { $avg: '$runDistance' },
        avgPace: { $avg: '$avgPace' },
        absoluteAvgHeartRate: { $avg: '$avgHeartRate' },
        totalActiveCalories: { $sum: '$activeCalories' },
        avgActiveCalories: { $avg: '$activeCalories' },
        absoluteTotalCalories: { $sum: '$totalCalories' },
        avgTotalCalories: { $avg: '$totalCalories' },
      }
    }, {
      $project: {
        _id: null,
        totalRunTime: 1,
        avgRunTime: 1,
        totalRunDistance: 1,
        avgRunDistance: { $round: ['$avgRunDistance', 2] },
        avgPace: 1,
        absoluteAvgHeartRate: { $round: '$absoluteAvgHeartRate' },
        totalActiveCalories: 1,
        avgActiveCalories: { $round: ['$avgActiveCalories', 2] },
        absoluteTotalCalories: 1,
        avgTotalCalories: { $round: ['$avgTotalCalories', 2] },
      }
    }
  ])


  if (!runs) {
    res.status(400).json({ message: 'No Runs Found for This User' })
    return
  }

  const response = {
    runs,
    cumulativeTotals
  }

  res.status(200).json(response)
})

//@desc   Set Run
//@route  POST /api/runsData
//@access Private
const setRun = asyncHandler(async (req, res) => {
  try {
    if (!req.body.date || !req.body.runTime || !req.body.runDistance || !req.body.avgPace || !req.body.avgHeartRate || !req.body.activeCalories || !req.body.totalCalories) {
      res.status(400).json({ message: 'Please fill in all fields' })
    }

    if (req.body.runDistance < 0 || req.body.avgHeartRate < 0 || req.body.activeCalories < 0 || req.body.totalCalories < 0) {
      res.status(400).json({ message: 'Input cannot be negative' })
    }

    //Function to make sure runTime and avgPace are in 'HH:MM:SS' format and to store them properly as numbers in database
    function convertToSeconds(timeStr) {
      const timeRegex = /^(?:([01]?\d|2[0-3]):)?([0-5]?\d):([0-5]?\d)$/

      if (!timeRegex.test(timeStr)) {
        res.status(400).json({ message: 'Invalid time format' })
      }

      const timeComponents = timeStr.split(':').map(Number)

      const numComponents = timeComponents.length

      let hours = 0
      let min = 0

      if (numComponents === 2) {
        min = timeComponents[0]
      } else if (numComponents === 3) {
        hours = timeComponents[0]
        min = timeComponents[1]
      }

      const seconds = timeComponents[numComponents - 1]
      const totalSeconds = (hours * 3600) + (min * 60) + seconds
      return totalSeconds
    }


    const run = await Run.create({
      date: req.body.date,
      runTime: convertToSeconds(req.body.runTime),
      runDistance: req.body.runDistance,
      avgPace: convertToSeconds(req.body.avgPace),
      avgHeartRate: req.body.avgHeartRate,
      activeCalories: req.body.activeCalories,
      totalCalories: req.body.totalCalories,
      user: req.user.id
    })
    res.status(200).json(run)

  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

//@desc   Update Run
//@route  PUT /api/runsData/:id
//@access Private
const updateRun = asyncHandler(async (req, res) => {
  const run = await Run.findById(req.params.id)

  if (!run) {
    res.status(400)
    throw new Error('Run not found')
  }

  const user = await User.findById(req.user.id)
  //Check for user
  if (!user) {
    res.status(401)
    throw new Error('User Not Found')
  }

  //Make sure the logged in user matches the goal user
  if (run.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User Not Authorized')
  }

  const updatedRun = await Run.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedRun)
})

//@desc   Delete Run
//@route  DELETE /api/runsData/:id
//@access Private
//This function does not work but is good as reference
const deleteRun = asyncHandler(async (req, res) => {
  const run = await Run.findById(req.params.id)

  if (!run) {
    res.status(400)
    throw new Error('Run not found')
  }

  const user = await User.findById(req.user.id)
  //Check for user
  if (!user) {
    res.status(401)
    throw new Error('User Not Found')
  }

  //Make sure the logged in user matches the goal user
  if (run.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User Not Authorized')
  }

  const deletedRun = await Run.findByIdAndDelete(req.params.id)

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getRuns,
  setRun,
  updateRun,
  deleteRun,
}