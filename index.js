import dotenv from "dotenv";
dotenv.config();
const express=require('express')
const mongoose=require('mongoose')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
mongoose.connect(process.env.MONGO_URI);

const cors=require('cors')
const UserModel=require('./models/User')
const app=express()
app.use(cors())
app.use(express.json())
app.post("/createUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
});
app.get("/",(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.get('/getUser/:id', (req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=> res.json(err))
})
app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age})
        .then(users=>res.json(users))
        .catch(err=>res.json(err))
    })
app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
        .then(data=>res.json(data))
        .catch(err=> res.json(err))
})
app.listen(3001, ()=>{
    console.log("Server is running")
}

)
