// implement your API here

const express = require('express');
const server = express()
const db = require('./data/db.js');
server.use(express.json())

server.post('/api/users', (req, res) => {
    const { name, body } = req.body
    if (!name || !body) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    }
    db.insert({ name, bio })
        .then(name, bio)
    res.status(201).json(name, bio)

})

server.get('/api/users', (req, res) => {
    db.find()
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(500).json({ error: "The users information could not be retrieved." })
        })
})


server.listen(9090, () =>
    console.log('Server running on http://localhost:9090')
);