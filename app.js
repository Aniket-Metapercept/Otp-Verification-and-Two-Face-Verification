const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.use('/api/user',userRoutes) 


app.listen(4000,console.log("Server Running"))
