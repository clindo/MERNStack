/**
 * Created by ckannana on 27-07-2016.
 */
var express=require('express');
var app=express();
app.use(express.static('static'));

app.listen(3000,function () {
    console.log("app listening @ port 3000");
})