const express = require('express');
const router = express.Router();

router.get('/course', (req,res) => res.render('internalProduct'))

module.exports = router;