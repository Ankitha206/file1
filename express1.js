const express=require('express')
const app=express()
let honey={
    name:'Wild honey',
    mrp:350.00,
}
app.get('/',function(req,res){
    res.json(honey)
})
app.listen(8082)