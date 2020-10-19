var exp=require ('express');
var app=exp();
app.listen(9000,function(){
    console.log("Server started at port 9000");
});
app.get('/greet',function(req,res){
    res.send("Welcome To Web Page......!!!");
});
app.get('/*',function(req,res){
    res.send("<h1> Welcome in Express App......!!!</h1> Please enter your URL.....!!!");
});