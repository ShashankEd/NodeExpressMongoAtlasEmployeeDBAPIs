import {client} from './dbConnect.js'

//GET employees
export const getEmployees = (req, res) => {
    console.log("getEmployees called")
    client.connect((err) => {
        console.log("getEmployees connect " + err)
        if(err) {
            res.status(500).send(err)
            return;
        }
        const collection = client.db('employee').collection('details');
        collection.find().toArray((err, result) => {
            if(err) res.status(500).send(err)
            if(result) res.json(result)
            client.close()
        })
    })
}

//Add employee: POST

export const addEmployee = (req, res) => {
    console.log("addEmployee called")
    client.connect((err) => {
        if(err) {
            console.log("addEmployee err " + err)
            res.status(500).send(err)
            return;
        }
        const emp = req.body
        console.log("Req body "+ JSON.stringify(emp))
        const collection = client.db('employee').collection('details');
        collection.insertOne(emp, (err, result) => {
            console.log("insertOne called " + err)
            if(err) res.status(500).send(err)
            if(result) res.json(result)
            client.close()
        })
    })
}
