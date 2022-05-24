const express = require('express');
const router = new express.Router();

router.get('/api/whoami', (req, res) => {
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent']
    })
})

module.exports = router