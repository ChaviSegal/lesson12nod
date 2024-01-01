const mongoose=require("mongoose");

const gameSchema=mongoose.Schema({
    name:String,
    price:Number
})
const gameModul=mongoose.model("myGames",gameSchema);
module.exports=gameModul;