import {db} from "../db.js"

export const getEnquiry = (req, res) => {
    const q =
      "SELECT * FROM enquiry WHERE user_id = ? ";
  
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
  
      return res.status(200).json(data[0]);
    });
  };

  export const makeEnquiry = (req, res) => {
    const user_id=req.body.user_id
    const property_id=req.body.property_id
    const message=req.body.message



    db.query(
        "INSERT INTO enquiry (user_id,property_id,e_message) VALUES (?,?,?)",
        [user_id, property_id, message],
        (err, result)=>{
          if(err){
            return res.status(500).json("Whats wrong");
          }
          else {
            return res.status(200).json("Enquiry has been made. Please await response.");
          }
        }
      )
  };

  export const getEnquiries = (req, res) => {
    db.query("SELECT * FROM enquiry", [req.query.cat], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
  };