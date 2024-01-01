const router=require("express").Router();
const gameModul=require("../moduls/game")

let arrGames=[{
    id:1,
    name:"kliks",
    price:70
},
{
    id:2,
    name:"kapla",
    price:70
},
{
    id:3,
    name:"lego",
    price:70
},
{
    id:4,
    name:"plyMobil",
    price:70
}]

router.get("/",(req,res)=>{
    gameModul.find({}).then(allGames=>{
        res.json(allGames)
    }).catch(err=>{
        res.status(400).send("לא ניתן קבל את המשחקים")
    })
})

router.get("/:gameId",(req,res)=>{
    let game=arrGames.find(item=>item.id==req.params.gameId)
        if(!game)
        return res.statuse(404).send("התרחשה שגיאה בקבלת הנתונים")
    res.json(game)   
})

router.delete("/:gameId",(req,res)=>{
    let index=arrGames.findIndex(item=>item.id==req.params.gameId)
    if(index==-1)
       return res.statuse(404).send("אין כזה פריט למחיקה")
    let game=arrGames.splice(index,1)[0];
    res.json(game);   
})

router.post("/",(req,res)=>{
    req.body.id=arrGames[arrGames.length-1].id+1;
    arrGames.push(req.body);
    res.json(req.body);
})

router.put("/:gameId",(req,res)=>{
    let game=arrGames.find(item=>item.id==req.params.gameId);
    if(!game)
       return res.status(404).send("אין כזה פריט לאריכה")
    if (req.body.name !== undefined) {
        game.name = req.body.name;
    }

    if (req.body.price !== undefined) {
        game.price = req.body.price;
    }   
    res.json(game)

})

module.exports = router;


