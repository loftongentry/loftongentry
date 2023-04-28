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
  if (!req.body.date || !req.body.runTime || !req.body.runDistance || !req.body.avgPace || !req.body.avgHeartRate || !req.body.activeCalories || !req.body.totalCalories) {
    res.status(400)
    throw new Error('Please fill in all fields')
  }
  const run = await Run.create({
    date: req.body.date,
    runTime: req.body.runTime,
    runDistance: req.body.runDistance,
    avgPace: req.body.avgPace,
    avgHeartRate: req.body.avgHeartRate,
    activeCalories: req.body.activeCalories,
    totalCalories: req.body.activeCalories,
  })

  res.status(200).json(run)
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

  const updatedRun = await Run.findByIdAndUpdate(req.params.id, req.body, { new: true })

  res.status(200).json(updatedRun)
})

//@desc   Delete Run
//@route  DELETE /api/runsData/:id
//@access Private
const deleteRun = asyncHandler(async (req, res) => {
  const run = await Run.findById(req.params.id)

  if (!run) {
    res.status(400)
    throw new Error('Run not found')
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