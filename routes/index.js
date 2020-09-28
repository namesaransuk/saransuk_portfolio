const express = require('express');
const myData = require('../data');
const router = express.Router();

router.get('/',(req, res)=>{
    res.render('index',{myData});
});

router.get('/aboutme',(req, res)=>{
    res.render('aboutme',{myData});
});

router.get('/education',(req, res)=>{
    res.render('education',{myData});
});

router.get('/workexperience',(req, res)=>{
    res.render('workexperience',{myData});
});

router.get('/skill',(req, res)=>{
    res.render('skill',{myData});
});

// router.get('/',(req, res)=>{
//     res.send("<h1>My Portfolio</h1>");
// });

// router.get('/aboutme',(req, res)=>{
//     res.send("<h1>About Me</h1>");
// });

// router.get('/education',(req, res)=>{
//     res.send("<h1>My Education</h1>");
// });

// router.get('/workexperience',(req, res)=>{
//     res.send("<h1>My Work Experience</h1>");
// });

// router.get('/skill',(req, res)=>{
//     res.send("<h1>My Skill</h1>");
// });

module.exports = router;