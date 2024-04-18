const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

const users = [
    { id: 1, name: 'sagor', email: 'sagor@gmail.com' },
    { id: 2, name: 'mustakim', email: 'mustakim@gmail.com' },
    { id: 3, name: 'razu', email: 'razu@gmail.com' }
]

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log(req.body)
    const newUser = req.body
    newUser.id = users.length + 1
    // console.log(newUser);
    users.push(newUser)
    res.send(newUser)
})


app.get('/', (req, res) => {
    res.send('Users Management server is running')
})

app.listen(port, () => {
    console.log(`Server is running port ${port}`);
})