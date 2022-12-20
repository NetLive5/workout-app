import  express from "express";
import { addNewExercise, deleteExercise } from "../controllers/exercise/exerciseController.js";
import {updateExerciseLog, updateCompleteExerciseLog} from "../controllers/exercise/log/updateController.js";

import { protect } from "../middleware/authMiddleware.js";
import { getExerciseLog } from "../controllers/exercise/log/getController.js";
import { updateExercise } from "../controllers/exercise/exerciseController.js";
import { addNewExerciseLog } from "../controllers/exercise/log/createController.js";



const router = express.Router()

router.route('/').post(protect, addNewExercise).put(protect, updateExercise).delete(protect, deleteExercise)

router.route('/log').put(protect, updateExerciseLog)

router.route('/log').post(protect, addNewExerciseLog)

router.route('/log/completed').put(protect, updateCompleteExerciseLog)

router.route('/log/:id').get(protect, getExerciseLog)

export default router
