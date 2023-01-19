const express = require('express')
const mysql = require("mysql")
const app = express()

app.use(express.json())
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"emali",
})


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3001)