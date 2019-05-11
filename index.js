// implement your API here

const express = require('express');
const server = express()
const db = require('./data/db.js');
server.use(express.json())

server.post('/api/users', (req, res) => {
    const user = req.body
    if (!user.name || !user.bio) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        db.insert(user)
            .then(addedUser => {
                res.status(201).json(addedUser)
            })
            .catch(err => {
                res.status(500).json({ error: "Users Info Not Found" })
            })
    }
})

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params
    db.findById(id)
        .then(user => {
            if (user) {
                res.send(user)
            } else {
                res.status(404).json({ err: 'ID NOT found!' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: "The users information could not be retrieved." })
        })
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

// server.put('/api.users/:id', (req, res) => {
//     const { id } = req.params
//     const { name, bio} = req.body

//     db.update(id, changes)
//         .then(user => {
//             if (user) {
//                 res.json(user)
//             } else {
//                 res.status(404).json({ err: 'Incorrect Id' })
//             }
//         })
//         .catch(err => {
//             res.status(500).json({ error: 'The Id Could not be updated' })
//         })
// })


server.put('/api/users/:id', (req, res) => {
    const id = req.params
    const { name, bio } = req.body

    if (!name || !body) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        const newUser = {
            name,
            bio
        }

        db.update(id, newUser)
            .then(err => {
                if (err) {
                    res.status(200).json(err)
                } else {
                    res.status(404).json({ error: ' "" ' })
                }
            })
            .catch(err => res.status(500).json({ error: "Error Changing" }))

    }

})









// server.delete('/api/users/:id', (req, res) => {
//     const { id } = req.params
//     db.remove(id)
//         .then(removed => {
//             if (removed) {
//                 res.send(removed)
//             } else {
//                 res.status(404).json({ err: 'incorrectem idem' })
//             }
//         })
//         .catch(err => {
//             res.status(500).json(err)
//         })
// })

server.listen(9090, () =>
    console.log('Server running on http://localhost:9090')
);