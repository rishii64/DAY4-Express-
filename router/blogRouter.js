const blog = require("express").Router()

blog.post("/createBlog", (req,res)=>{
    return res.send("blog created successfully")
})
blog.get("/getBlog", (req,res)=>{
    return res.send("fetched blog successfully")
})
blog.get("/getSingleBlog/:id", (req,res)=>{
    const ids = req.params.id
    // const singleData = data.find(item => item.id == id)
    const singleData = `Data of ${ids}`
    return res.send(singleData)
})

blog.get("/getQuery",(req,res)=>{
    const datas = req.query
    const name = datas.name
    const age = datas.age
    const dept = datas.dept
    console.log(datas,"for Query")
    return res.send({
        "Name": name,
        "Age": age,
        "Department": dept
    })
})

module.exports = blog
