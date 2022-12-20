import  express from "express";
import { addNewWorkout, deleteWorkout, getWorkout } from "../controllers/workout/workoutController.js";
import { protect } from "../middleware/authMiddleware.js";
import { CreateNewWorkoutLog } from "../controllers/workout/logController.js";
import { updateWorkout } from "../controllers/workout/workoutController.js";



const router = express.Router()

router.route('/').post(protect, addNewWorkout).put(protect, updateWorkout).delete(protect, deleteWorkout)
router.route('/log').post(protect, CreateNewWorkoutLog)
router.route('/:id').get(protect, getWorkout)

export default router
