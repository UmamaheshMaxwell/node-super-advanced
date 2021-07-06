const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

app.get("/", (req, res) =>{
    res.json({message: 'Hello'})
})

const PORT = 4321

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})