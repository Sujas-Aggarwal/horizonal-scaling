//Using Round Robin Technique
const express = require("express");
const app = express();
const servers = ["http://localhost:3001","http://localhost:3002"];
let turn = 0;
app.get("/",(req,res)=>{
    turn+=1;
    turn%=servers.length;
    res.redirect(servers[turn]);
})
app.listen(3000,()=>{
    console.log("Load Balancer is running on server 3000");
})