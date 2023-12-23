import express from 'express'
import {Model} from './model.js'
const router = express.Router()

//GET API
router.get('/employees', async (req, res) => {
    console.log("inside GET...")
    try{
        const data = await Model.find();
        const response = {
            "status": "success",
            "data": data,
            "message": "Successfully! All records has been fetched."
        }
        res.json(response)
    }
    catch(error){
        res.status(500).json({
            "status": "success",
            "message": error.message
        })
    }
})

//POST API
router.post('/employees', async (req, res) => {
    console.log("inside POST... req" + JSON.stringify(req.body))
    console.log("Salary "+ req.body.employee_salary)
    //here we need to create a model class object and save into the DB
    const data = new Model({
        employee_salary: req.body.employee_salary,
        employee_name:  req.body.employee_name,
        employee_age: req.body.employee_age,
        profile_image: req.body.profile_image
    })
    try {
        const dataToSave = await data.save()
        res.status(200).json({
            "message" : "Successfully saved",
            "saved_emp": dataToSave
        })

    } catch(e) {
        res.status(400).json({
            status : "Failure",
            message: e.message, 
            error_code: 400,
            msg_id: 120
        })
    }
})

//Delete API
router.delete('/delete/:id', async (req, res) => {
    console.log("inside Delete " + req.params.id)
    try {
        const id = req.params.id;
        //first find whether this ID is there in the DB or not 
        const data = await Model.findByIdAndDelete(id)
        res.json({
            message: 'Successfully Deleted employee -> ' + data.name
        })
    }
    catch (error) {
        res.status(400).json({ 
            status : "Failure",
            message: error.message
         })
    }
})

export default router