const express = require('express');
const MensRanking =require("../src/models/mens");
const router = require('./router/men');
require('./db/connection');
const app=express();
const port = process.env.Port||3000;
app.use(express.json());
app.use(router);


app.get('/', async(req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
})