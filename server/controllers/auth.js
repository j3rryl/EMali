import {db} from "../db.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    //CHECK EXISTING USER
  const first=req.body.first
  const last=req.body.last
  const email=req.body.email
  const password=req.body.password
    const q = "SELECT * FROM users WHERE email = ?";
  
    db.query(q, [email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists!");
  
      //Hash the password and create a user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      db.query(
        "INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)",
        [first,last,email,hash],
        (err, result)=>{
          if(err){
            return res.status(500).json(err);
          }
          // if(result.length>0){
          //   res.send(result)
          // } 
          else {
            return res.status(200).json("User has been created.");
          }
        }
      )
    });
  };


  
  export const login = (req, res) => {
    //CHECK USER
  const email=req.body.email
  
    const q = "SELECT * FROM users WHERE email = ?";
  
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
  
      //Check password
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
  
      if (!isPasswordCorrect)
        return res.status(400).json("Wrong email or password!");
  
      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...other } = data[0];
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });
  };

  export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };