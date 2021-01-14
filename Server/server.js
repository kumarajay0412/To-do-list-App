const express = require("express")
const mongoose =require("mongoose")

const app =express()
app.use(express.json())

const db ="mongodb://localhost:27017/myfullstackapp"
mongoose.connect(db,({useNewUrlParser: true}))
.then(console.log("Connected to mongodb"))
.catch(err =>console.log(err))

const todoSchema=new mongoose.Schema({
    title:String,
    complete:{
        type:Boolean,
        default:false
    }
})

const Todo = mongoose.model('todo',todoSchema)

app.get("/todos",(req,res)=>{
    Todo.find().then(todo=> res.json(todo))
})
app.post("/todos",(req,res,next) =>{
    if(req.body.title){
        Todo.create(req.body)
          .then(data => res.json(data))
          .catch(next)
     }else{
        res.json({
          error: "The input field is empty!"
        })
      }
})
app.delete("/todos/:id",(req,res)=>{
    Todo.findByIdAndDelete(req.params.id).then(()=> res.json({remove :true}))
})
app.listen(5000 ,()=>{
    console.log("server is running at port 5000")
});