import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema

const workoutSchema = mongoose.Schema({
    name: {
        type:String, 
        require: true,
    },
    exercises:[{
        type: ObjectId,
        ref: 'Exercise',
        require: true,
    }],
   
},
{
minimize: false,
timestamps: true
})



const Workout = mongoose.model('Workout', workoutSchema)

export default Workout