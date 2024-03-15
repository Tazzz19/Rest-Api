const express = require('express')
const router = express.Router()
const { getGoals, setGoal,updateGoal, deleteGoal, getSingleGoal } = require('../controllers/goalsControllers')

// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').delete(deleteGoal).put(updateGoal)

router.get('/',getGoals)
router.post('/', setGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)
 router.get('/:id', getSingleGoal)


module.exports = router
