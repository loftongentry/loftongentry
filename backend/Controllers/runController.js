const asyncHandler = require('express-async-handler')

const Run = require('../models/runModel')

//@desc   Get Runs
//@route  GET /api/runsData
//@access Private
const getRuns = asyncHandler(async (req, res) => {
  const runs = await Run.find()

  res.status(200).json(runs)
})

//@desc   Set Run
//@route  POST /api/runsData
//@access Private
const setRun = asyncHandler(async (req, res) => {
  // if (!req.body.text) {
  //   res.status(400)
  //   throw new Error('Please add a text field')
  // }
  const run = await Run.create({
    date: req.body.date,
    runTime: req.body.runTime,
    runDistance: req.body.runDistance,
    avgPace: req.body.avgPace,
    avgHeartRate: req.body.avgHeartRate,
    activeCalories: req.body.activeCalories,
    totalCalories: req.body.activeCalories,
    timeForEachMile: JSON.parse(req.body.timeForEachMile),
    avgPaceForMile: JSON.parse(req.body.avgPaceForMile),
  })

  res.status(200).json(run)
})

//@desc   Update Run
//@route  PUT /api/runsData/:id
//@access Private
const updateRun = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update run ${req.params.id}` })
})

//@desc   Delete Run
//@route  DELETE /api/runsData/:id
//@access Private
const deleteRun = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete run ${req.params.id}` })
})

module.exports = {
  getRuns,
  setRun,
  updateRun,
  deleteRun,
}