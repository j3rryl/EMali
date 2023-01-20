import express from "express";
import {
  addProperty,
  deleteProperty,
  getProperty,
  getProperties,
  updateProperty,
  getPropertiesByUser,
} from "../controllers/property.js";

const router = express.Router();

router.get("/", getProperties);
router.get("/all", getPropertiesByUser);
router.get("/:id", getProperty);
router.post("/", addProperty);
router.delete("/:id", deleteProperty);
router.put("/:id", updateProperty);

export default router;