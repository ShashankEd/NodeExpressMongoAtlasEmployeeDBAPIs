
import mongoose, { Schema } from 'mongoose'
const dataSchema = new Schema({
    employee_salary: {
        required: true,
        type: Number
    },
    employee_name: {
        required: true,
        type: String
    },
    employee_age: {
        required: true,
        type: Number
    },
    profile_image: {
        required: true,
        type: String
    },
})

export const Model = mongoose.model('Data', dataSchema)
