import {db} from "../db.js"


export const getFeedback = (req, res) => {
    // const property_id=req.query.property_id
    const q =
      "SELECT * FROM feedback LEFT JOIN enquiry ON feedback.enquiry_id = enquiry.enquiry_id WHERE user_id = ?";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  };

  export const getFeedbacks = (req, res) => {
    db.query("SELECT * FROM feedback", [req.query.cat], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
  };