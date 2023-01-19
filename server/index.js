const express = require('express')
const mysql = require("mysql")
const cors=require("cors")
const app = express()

app.use(express.json())
app.use(cors())
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"e-mali",
})

app.post("/register", (req,res)=>{
  const first=req.body.first
  const last=req.body.last
  const email=req.body.email
  const password=req.body.password
  db.query(
    "INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)",
    [first,last,email,password],
    (err, result)=>{
      if(err){
        res.send({err:err})
      }
      if(result.length>0){
        res.send(result)
      } else {
        res.send({message: "Some error"})
      }
    }
  )
})

app.post("/login", (req,res)=>{
  const email=req.body.email
  const password=req.body.password
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email,password],
    (err, result)=>{
      if(err){
        res.send({err:err})
      }
      if(result){
        res.send(result)
      } else {
        res.send({message: "Wrong username and/or password"})
      }
    }
  )
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3001, ()=>{
  console.log("server running")
})