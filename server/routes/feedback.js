import express from "express";
import { getFeedback, getFeedbacks } from "../controllers/feedback.js";


const router = express.Router();

router.get("/all", getFeedbacks);
router.get("/getfeedback/:id", getFeedback);


export default router;