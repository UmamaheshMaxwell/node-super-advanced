const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    res.json({message: 'Hello'})
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})