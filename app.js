//create a server by using express and make 3 routes which will send a data from different file
const express = require("express") // third-party module
const { data, data2, data3 } = require('./store')
const userRouter = require("./router/userRouter")
const blogRouter = require("./router/blogRouter")
const cors = require("cors")
const app = express() //MVC
const dotEnv = require("dotenv");
dotEnv.config()
const port = process.env.port

const middleware = (req, res, next) => {
    console.log(req.param.age);
    console.log("first middleware");
    next()
}
// app.use(middleware)
// app.get("/api/middlewareEx/:age", (req, res) => {
//     console.log(req.params.age, "in api");
//     console.log("api is running");
//     res.send([
//         {
//             "id": 1,
//             "name": "Rishi",
//             "num": 1234
//         },
//         {
//             "id": 2,
//             "name": "Saptarshi",
//             "num": 5678
//         },
//         {
//             "id": 3,
//             "name": "Kaneki",
//             "num": 9012
//         }
//     ])
// })


app.use(express.json()) // body parser
app.use((cors)({
    // origin: ["http://localhost:3000", "http://prepbytes.com", "http://localhost:8080/"]  // allowing specific domains
    origin: "*" // allow for everyone
}))
app.use("/user", userRouter)
app.use("/blog", blogRouter)



// app.get("/route1", (req, res)=>{
//     return res.send(data)
// })
// app.get("/route2",(req,res)=>{
//     return res.send(data2)
// })
// app.get("/route3", (req,res)=>{
//     return res.send(data3)
// })
app.listen(3000, () => {
    try {
        console.log(`server started at ${port}`);
    }
    catch {
        console.log('404 error');
    }
})