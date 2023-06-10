const express = require("express");
const app = express();
const database = require("./src/database");
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("server is running...");
})
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",function(req,res){
    const Auth = require("./src/models/user");
    Auth.find({})
    .then(rs=>{
        res.render("home",{
            users: rs
        })
    })
    .catch(err=>{
        res.send(err);      
    })
})

const userRoutes = require("./src/routes/user.route");
app.use("/users",userRoutes);