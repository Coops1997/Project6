const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();


//on post //

router.post("/", async (req, res) => {

    const users =[{email:"", password:"",}]

//get to user from datebase

let user = users.find(u => u.email === req.body.email);
if (!user) throw new Error ("Invalid email or password")
})

const valid = await bcrypt.compare(req, body, password, user.password);
if (!valid) throw new Error ("Invalid email or password");

const token = jwt.sign({
    id:user._id,
    roles: user.roles,
}, "jwtPrivateKey", {expiresIn: "15m"});

res.send({
    okay: true,
    token: token,
});


module.exports = router;