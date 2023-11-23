const route = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// const auth = require("./middleware/authverification")
const saltRound = 10
const dotEnv = require("dotenv");
dotEnv.config()
const secretKey = process.env.secretKey
let arr = [] //database

route.post("/register", (req, res) => {
    const data = req.body
    console.log(data);
    // data = {
    //     "name": "rishi",
    //     "email": "sm@gmail.com",
    //     "pass": "txt@123"
    // }
    data.pass = bcrypt.hashSync(data.pass, saltRound)
    arr.push(data)
    
    const token = jwt.sign({user:data.email},secretKey,{expiresIn:36000})

    return res.send(`user registered successfully with JWT ${token}`)
})
route.post("/login", (req, res) => {
    const loginData = req.body
    // console.log("login data", loginData);
    let findAcc = arr.find(item => item.email == loginData.email)
    if (!findAcc)
        return res.send({ msg: "Please try to register / provide correct email" })
    
    const validate = bcrypt.compareSync(loginData.pass, findAcc.pass) // checking true/false
    
    if (validate)
        return res.send({ msg: "user login successfully" })

    return res.send({ msg: "user password doesn't match" })
})

route.get("/getUserData", (req, res) => {
    return res.send(arr)
})

module.exports = route
