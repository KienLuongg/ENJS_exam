const express = require("express");
const router = express.Router();
const Product = require("./../models/user");
router.get("",(req,res)=>{
    Product.find({})
        .then(rs=>{
            res.render("",{
                products: rs
            })
        })
        .catch(err=>{
            res.send(err);      
        })
});
router.get("/create",(req,res)=>{
});
router.post("/create",(req,res)=>{
});

module.exports = router;