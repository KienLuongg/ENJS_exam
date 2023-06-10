const User = require("./../models/user");
const bcrypt = require("bcryptjs");

exports.get = async (req,res)=>{
    Auth.find({})
        try {
            const rs = await Auth.find({});
            res.render("user/list",{
                users: rs
            })
        }
        catch (error){
            res.send(error);
        }
};

exports.create = (req,res)=>{
    res.render("user/create");
};

exports.save = async (req,res)=>{
    try {
        let existuser = await User.findOne({userName:req.body.email});
        if(existuser) return res.status(422).send("This user name is exist..");
        const salt = await bcrypt.genSalt(10);
        const hashPwd = await bcrypt.hash(req.body.password,salt);
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobile: req.body.mobile,
            userName: req.body.userName,
            password: hashPwd
        })
        await user.save();
        res.send("DONE");
    } catch (error) {
        res.send(error);
    }

};