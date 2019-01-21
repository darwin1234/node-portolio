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

module.exports = router;