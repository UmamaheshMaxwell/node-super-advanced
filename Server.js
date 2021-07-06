/*
    * CRUD - CREATE READ UPDATE DELETE

    ? GET - READ
    * POST - CREATE
    ? PUT - UPDATE 
    ! DELETE - DELETE
*/

const express = require('express')
const app = express()
const {Client}  = require('pg')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const client = new Client({
    user:'xxxx',
    host: 'xxxxx',
    database: 'xxxxx',
    password: 'XXX@123',
    port: git statu5432
})

client.connect((error) => {
    if(error){
        console.log(`Database Connection Error: ${error}`)
    } else {
        console.log('Sucessfully Connected to Database')
    }
})

app.get("/student", (req, res) => {

    const selectQuery = 'SELECT name, email, city, is_admin, id FROM student;'

    client.query(selectQuery, (err, data)=>{
        if(err) {
            throw err
        }
        res.json(data.rows)
    })
})

app.post("/student", (req, res) => {

    const body = req.body

    const insertQuery = `INSERT INTO student(name, email, city, is_admin) 
    VALUES ('${body.name}','${body.email}', '${body.city}', ${body.is_admin});`

    console.log(insertQuery)
    client.query(insertQuery, (err, data)=>{
        if(err) {
            throw err
        }
        res.json(data)
    })
})

app.put("/student/:id", (req, res) => {

    const body = req.body
    const studentId = req.params.id

    const updateQuery= `UPDATE student SET name='${body.name}', 
    email='${body.email}', city='${body.city}', is_admin=${body.is_admin} WHERE id=${studentId};`

    client.query(updateQuery, (err, data)=>{
        if(err) {
            throw err
        }
        res.json(data)
    })
})

app.delete("/student/:id", (req, res) => {

    const studentId = req.params.id
    const deleteQuery= `DELETE FROM student WHERE id=${studentId};`

    client.query(deleteQuery, (err, data)=>{
        if(err) {
            throw err
        }
        res.json(data)
    })
})

app.get("/", (req, res) => {

    // data coming from DB
    const students = [
        {
            id:1,
            name: 'Scott'
        },
        {
            id:2,
            name: 'Adam'
        },
        {
            id:3,
            name: 'Tuan'
        },        {
            id:4,
            name: 'Uma'
        }
    ]

    res.json({students: students})
})



const PORT = 4321

app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT} `)
})
