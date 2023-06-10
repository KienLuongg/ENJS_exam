const server = "mongodb://127.0.0.1:27017";
const db_name = "ENJS";
const mongoose = require("mongoose");
class Database{
    constructor(){
        this._connect();
    }
    _connect(){
        mongoose.connect(`${server}/${db_name}`)
        .then(()=>{  
            console.log("Connect successfully");
        })
        .catch(err=>{
            console.log(err);
        });
    }
}

module.exports = new Database();