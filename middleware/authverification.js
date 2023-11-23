const jwt = require("jsonwebtoken")
const secretKey = "sm"
const auth = (req,res, next) =>{
    const auth = (req,res)=>{
        const data = req.headers["authorisation"]
        console.log(data,"data")
        const token = data.split(" ")[1]
        console.log(token,"token")
        jwt.verify(token,process.env.secretKey, (err,validate)=>{
            if(err)
                return res.send({msg: err})
            if(validate)
                return next()
            return res.send({msg:"user not authorised"})
        })
    }
}
module.exports = auth