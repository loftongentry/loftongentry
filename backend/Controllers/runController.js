const asyncHandler = require('express-async-handler')



//@desc   Get Runs
//@route  GET /api/runsData
//@access Private
const getRuns = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get runs' })
})

//@desc   Set Run
//@route  POST /api/runsData
//@access Private
const setRun = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: 'Set run' })
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