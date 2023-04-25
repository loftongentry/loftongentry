const express = require('express')
const router = express.Router()
const { getRuns, setRun, updateRun, deleteRun } = require('../Controllers/runController')

router.route('/').get(getRuns).post(setRun)
router.route('/:id').put(updateRun).delete(deleteRun)

module.exports = router