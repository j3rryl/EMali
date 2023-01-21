import express from "express"
import { getEnquiries, getEnquiry, makeEnquiry } from "../controllers/enquiry.js"
const router=express.Router()
router.post("/makeenquiry", makeEnquiry)
router.get("/getenquiry/:id", getEnquiry)
router.get("/getenquries", getEnquiries)

export default router;