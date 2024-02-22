import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get('/hello',(req,res) => {
    res.send('Hello!');
});

app.post('/hello',(req, res)=>{
  res.send(`HELLO ${req.body.name}`)
});
app.listen(8001,() => {
    console.log('server is listening on port 8001');
})