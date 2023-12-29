import express from 'express'
import mongoose from 'mongoose'
import routes from './src/routes/route.js'
import 'dotenv/config.js'
// console.log(process.env)

const PORT = process.env.PORT || 3000
const app = express()   
app.use(express.urlencoded(
  {extended: true}
))
app.use(express.json())
app.use('/api',routes)

mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


app.listen(PORT, () => {
    console.log("Server running on port "+ PORT);
});




