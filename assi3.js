var exp=require ('express');
var app=exp();
app.listen(9000,function(){
    console.log("Server started at port 9000");
});
app.get('/login/:userid/:password',function(req,res){
    res.send("Userid:"+req.params.userid+"\n"+"Password:"+req.params.password);
});
app.get('/*',function(req,res){
    res.send("<h1> Welcome in Express App......!!!</h1> Please enter your URL.....!!!");
});