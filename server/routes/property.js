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
  pendingApproval,
  pendingApprovalOrApproved,
  updateApproved,
  updateDeclined,
  saveProcess,
  deleteProcess,
  getProcess,
  updateTransfer,
} from "../controllers/property.js";

const router = express.Router();

router.get("/all", getProperties);
router.get("/approved", getApprovedProperties);
router.post("/by", getPropertiesByUser);
router.post("/saveproperty", saveProperty);
router.post("/startprocess", saveProcess);

router.get("/getprocess", getProcess);

router.put("/updatetransfer/:id", updateTransfer);

router.post("/pendingpayment", pendingPayment);
router.get("/pendingapproval", pendingApproval);
router.get("/pendingapprovalapproved", pendingApprovalOrApproved);
router.get("/:id", getProperty);
router.get("/getsaved/:id", getPropertiesSaved);
router.get("/findsaved/:id", findifSaved);
router.post("/addproperty", addProperty);
router.delete("/deleteproperty/:id", deleteProperty);
router.delete("/deleteprocess/:id", deleteProcess);

router.delete("/deletesaved/:id", deleteSaved);
router.put("/updateproperty/:id", updateProperty);
router.put("/updateValuated/:id", updateValuated);
router.put("/updateapproved/:id", updateApproved);
router.put("/updatedeclined/:id", updateDeclined);

export default router;