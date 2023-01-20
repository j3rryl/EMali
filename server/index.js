// const express = require('express')
// const mysql = require("mysql")
// const cors=require("cors")
import express from "express";
import mysql from "mysql";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import propertyRoutes from "./routes/property.js";
import cookieParser from "cookie-parser";


const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"e-mali",
})

// app.post("/register", (req,res)=>{
//   const first=req.body.first
//   const last=req.body.last
//   const email=req.body.email
//   const password=req.body.password
//   db.query(
//     "INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)",
//     [first,last,email,password],
//     (err, result)=>{
//       if(err){
//         res.send({err:err})
//       }
//       if(result.length>0){
//         res.send(result)
//       } else {
//         res.send({message: "Some error"})
//       }
//     }
//   )
// })
app.use("/api/auth", authRoutes);
app.use("/api/property", propertyRoutes);


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


app.get("/properties", (req,res)=>{
  const q = "SELECT * FROM property WHERE valuated = 'Approved' "
  db.query(q,(err,data)=>{
    if(err) res.json(err)
    return res.json(data)
  })
})

app.post("/propertiesby", (req,res)=>{
  const user_id=req.body.user_id

  db.query("SELECT * FROM property WHERE user_id = ?",
  [user_id],(err,data)=>{
    if(err) res.json(err)
    return res.json(data)
  })
})
app.post("/propertiespending", (req,res)=>{
  const user_id=req.body.user_id

  db.query("SELECT * FROM property WHERE user_id = ? AND valuated = 'Pending Payment'",
  [user_id],(err,data)=>{
    if(err) res.json(err)
    return res.json(data)
  })
})

app.put("/updateValuated/:id", (req,res)=>{

  db.query("UPDATE property SET valuated='Pending Approval' WHERE property_id = ?",
  [req.params.id],(err,data)=>{
    if(err) res.json(err)
    return res.json(data)
  })
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3001, ()=>{
  console.log("server running")
})