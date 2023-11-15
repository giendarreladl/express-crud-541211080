const express = require('express');
const router = express.Router()
const usercontoller = require('../controller/users')

router.get('/kehadiran', usercontoller.get)

router.get('/kehadiran/:id', usercontoller.getid)

router.post('/addkehadiran', usercontoller.post)

router.put('/updatekehadiran/:id', usercontoller.put)

router.delete('/deletekehadiran/:id', usercontoller.del)

module.exports = router;