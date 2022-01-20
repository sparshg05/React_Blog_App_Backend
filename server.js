const express = require('express');
const serverless = require("serverless-http");

const app = express();
const cors = require("cors");
const data = require('./course.json');
const PORT=8080;

const router = express.Router();

app.use(cors());


router.get("/jasonData" , (req,res)=>{
    // console.log(req.query);
    res.send(data);
})

app.use(`/.netlify/functions/api`, router);

app.listen(PORT , ()=>{
    console.log(`Server is listening on port ${PORT}`);
});
module.exports.handler = serverless(app);