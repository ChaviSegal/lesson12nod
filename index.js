const express=require("express");
const mongoose=require("mongoose");

const gameRouter=require("./routs/games")

mongoose.connect("mongodb://0.0.0.0:27017/myLibrary").then(()=>{
         console.log("conacted mongo db!!!");
}).catch(err=>{
   console.log(err);
   console.log("cannot connect mongo db");
   process.exit(1);
}
)

const app=express();

app.use(express.json());
 
app.use("/",gameRouter)

app.listen(6000,()=>{
   console.log("listening on port 6000")
})