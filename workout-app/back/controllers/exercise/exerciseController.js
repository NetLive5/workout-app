import asyncHandler from "express-async-handler"
import Exercise from "../../models/exerciseModel.js"

// @desc    Get exercise
// @route   Get /api/exercises
// @access  Private
export const addNewExercise = asyncHandler(async(req,res) => {
 const {name , times, imageIndex} = req.body

 const exercise = await Exercise.create({
  name,
  times,
  imageIdx: imageIndex,
 })

 res.json(exercise)
})

// @desc    Update exercise
// @route   Put /api/exercises
// @access  Private

export const updateExercise = asyncHandler(async(req,res) => {
    const {name , times, imageIndex, exerciseId} = req.body

    const exercise = await Exercise.findById(exerciseId)

    
    if(!exercise){
        res.status(404)
        throw new Error('Данное упражнение  не найдено!')
    }
  
    exercise.name = name
    exercise.times = times
    exercise.imageIdx = imageIndex

    const updatedExercise = await exercise.save()

    res.json(updatedExercise)
})

// @desc    Delete exercise
// @route   DELETE /api/exercises
// @access  Private

export const deleteExercise = asyncHandler(async(req,res) => {
    const {exerciseId} = req.body

    const exercise = await Exercise.findById(exerciseId)

    
    if(!exercise){
        res.status(404)
        throw new Error('Данное упражнение  не найдено!')
    }
  
    

    await exercise.remove()

    res.json({message: "Упражнение удалено"})
})

