const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/', (req , res)=>{
    res.send("Hello Nodemon set up done");
})

const users = [

    {id:1, name:"Saklain Mustak", email:"saklainm71@gmail.com", phone:"01010"},
    {id:2, name:"saklain Mustak", email:"saklainm71@gmail.com", phone:"01010"},
    {id:3, name:"zahid hasan", email:"saklainm71@gmail.com", phone:"01010"},
    {id:4, name:"zahid hasan noor", email:"saklainm71@gmail.com", phone:"01010"},
    {id:5, name:"salam", email:"saklainm71@gmail.com", phone:"01010"}
]
app.get('/users', (req , res)=>{
    //console.log("query",req.query);
   if(req.query.name){
       const search = req.query.name.toLowerCase();
       const matched = users.filter(user => user.name.toLowerCase().includes(search))
       res.send(matched);
   }else{
    res.send(users);

   }
   
})

app.get('/user/:id',(req , res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user);
    res.send("Finding Users");
})
app.get('/fruits' ,(req, res)=>{
    res.send(["mango", "apple","orange"]);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, ()=>{
    console.log("Listening to port", port);
})