const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join('./','static_files')));

app.get('/gethello',(req,res)=>{
    res.send('Hello NodeJs!!');
});

app.listen(PORT,()=>{
    console.log("server running at 3000");
});