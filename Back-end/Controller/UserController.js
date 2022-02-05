const express = require('express');
const router = express.Router();
const userModel = require('../Model/User');

//GET requests
//POST requests
router.post('/api/',async(req, res) => {
    if( req.body.nickname === undefined ||
        req.body.mail === undefined ||
        req.body.password === undefined ||
        req.body.discordtag === undefined ||
        req.body.summonerName === undefined) 
        {
            res.status(400).json({message: "Invalid request body, please check request body and try again."});
        }
    else {
        const newUser = new userModel({...req.body});
        await newUser.save()
            .then(() => res.status(201).json({message: "New user has been created."}))
            .catch(error => res.status(400).json({message: error}));
    }
})
//PUT requests
//DELETE requests

module.exports = router;