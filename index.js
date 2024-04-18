const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

const users = [
    {id:1,name:'sagor',email:'sagor@gmail.com'},
    {id:2,name:'mustakim',email:'mustakim@gmail.com'},
    {id:3,name:'razu',email:'razu@gmail.com'}
]

app.get('/users',(req , res)=>{
    res.send(users)
})


app.get('/',(req , res)=>{
    res.send('Users Management server is running')
})

app.listen(port,()=>{
    console.log(`Server is running port ${port}`);
})