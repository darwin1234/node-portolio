const express = require("express");
const router = express.Router();

const axios  = require('axios');

const PostApi = "https://jsonplaceholder.typicode.com/";

router.get('/posts', (req,res) =>{
	axios.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
		res.status(200).json(response.data);
	}).catch(function(error){
		res.status(500).send(error);
	});
});

router.get('/login', (req,res) => {
	//console.log("Hello World!");
	req.sendFile("HELLO WORLD!");
});

router.get('/register', (req,res) => {
	//console.log("Hello World!");
	req.sendFile("HELLO WORLD!");
});

module.exports = router;