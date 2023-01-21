import { db } from "../db.js";

export const getUsers = (req, res) => {

  db.query("SELECT * FROM users", [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};


export const getUser = (req, res) => {
  const q =
    "SELECT * FROM users WHERE user_id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

export const addUser = (req, res) => {
  //CHECK EXISTING USER
  const first=req.body.first
  const last=req.body.last
  const email=req.body.email
  const role=req.body.role
  const password=req.body.password
    const q = "SELECT * FROM users WHERE email = ?";
  
    db.query(q, [email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists!");
  
      //Hash the password and create a user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      db.query(
        "INSERT INTO users (first_name, last_name, email, password,user_role) VALUES (?,?,?,?,?)",
        [first,last,email,hash,role],
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

export const deleteUser= (req, res) => {

    const userId = req.params.id;
    const q = "DELETE FROM users WHERE `user_id` = ?";

    db.query(q, [userId], (err, data) => {
      if (err) return res.status(403).json("You can delete only your user!");

      return res.json("User has been deleted!");
    });
  
};

export const updateUser = (req, res) => {
    const postId = req.params.id;
    const q =
      "UPDATE users SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `user_id` = ? ";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("User has been updated.");
    });
};