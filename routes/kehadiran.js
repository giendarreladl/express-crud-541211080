const express = require('express')
const route = express.Router();
const { getUser, addUser, updateUser, deleteUser, getUserById} = require('../controller/users')

// route.get('/kehadiran', (req, res) => {
//   res.send('Hello World!')
// })

route.get('/kehadiran', getUser)

route.post('/addkehadiran', addUser)

route.put('/kehadiran/:id', updateUser)

route.delete('//kehadiran/:id', (req, res) => {
  res.send('Delete Hello World!')
})

module.exports = route