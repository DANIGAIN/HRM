const express = require('express');
const createGrade = require('../controllers/grade/createGrade.controller');

const router = express.Router();

router.post('/grade', (req, res)=>{
    console.log(req);
});


module.exports = router;

