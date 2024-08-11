const express = require("express");
const app = express();
const fs = require("fs");
const requests = JSON.parse(fs.readFileSync("requests.json"));
if (!requests.total){
    requests.total = 0;
}
if (!requests.details){
    requests.details = [];
}
app.get("/",(req,res)=>{
    requests.total+=1;
    requests.details.push(req.headers);
    fs.writeFileSync("requests.json",JSON.stringify(requests));
    console.log(req)
    res.json({
        message:`Total Requests ${requests.total} on server 1`
    })
})
app.listen(3001, () => {
    console.log("Server 1 is running on port 3001");
});