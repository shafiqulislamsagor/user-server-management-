const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())


const user = [
    {id:1,name:"Habib",email:'habibkhan@gmail.com'},
    {id:2,name:"Sagor",email:'shafiqulislamsagor@gmail.com'}
]

app.get('/users',(req,res)=>{
    res.send(user)
})

app.post('/users',(req,res)=>{
    const newUser = req.body
    console.log(newUser);
    user.push(newUser)
    res.send(newUser)
})

app.get('/',(req , res)=>{
    res.send('this is server management')
})

app.listen(port,()=>{
    console.log('this is port',port);
})