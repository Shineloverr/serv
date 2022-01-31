import express from "express";
import User from "./model/user.js";

const app = express();
app.use(express.json());

//app.get('/users', async (req, res) => {
//  res.send(await User.findAll());
//});

//app.post('/login', (req, res) => {
//  res.send(req.body)
//});

app.get('/',(req,res) => {
  res.send({message: 'Its Works!'});
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});
