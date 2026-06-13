const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../../models/listing.js");


const Mongo_url = "mongodb://127.0.0.1:27017/wanderlust"

async function initdb (){
  try{
    await mongoose.connect(Mongo_url);

    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("Data intialised Succesfully");

        mongoose.connection.close();
  }catch(err){
    console.log(err);
  }
}


initdb();