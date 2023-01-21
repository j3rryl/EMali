// const express = require('express')
// const mysql = require("mysql")
// const cors=require("cors")
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import enquiryRoutes from "./routes/enquiry.js";

import feedbackRoutes from "./routes/feedback.js";

import propertyRoutes from "./routes/property.js";
import cookieParser from "cookie-parser";


const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use("/api/auth", authRoutes);
app.use("/api/enquiry", enquiryRoutes);

app.use("/api/feedback", feedbackRoutes);
app.use("/api/user", userRoutes);
app.use("/api/property", propertyRoutes);



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3001, ()=>{
  console.log("server running")
})