import express from "express";
import {
  addProperty,
  deleteProperty,
  getProperty,
  getProperties,
  updateProperty,
  getPropertiesByUser,
  getApprovedProperties,
  pendingPayment,
  updateValuated,
  saveProperty,
  getPropertiesSaved,
  findifSaved,
  deleteSaved,
} from "../controllers/property.js";

const router = express.Router();

router.get("/all", getProperties);
router.get("/approved", getApprovedProperties);
router.post("/by", getPropertiesByUser);
router.post("/saveproperty", saveProperty);
router.post("/pendingpayment", pendingPayment);
router.get("/:id", getProperty);
router.get("/getsaved/:id", getPropertiesSaved);
router.get("/findsaved/:id", findifSaved);
router.post("/", addProperty);
router.delete("/:id", deleteProperty);
router.delete("/deletesaved/:id", deleteSaved);
router.put("/:id", updateProperty);
router.put("/updateValuated/:id", updateValuated);

export default router;