const mongoose = require("mongoose");

const main = async () =>{
    await mongoose.connect("mongodb://127.0.0.1:27017/express");
    console.log("connect");
}

module.exports =main;
