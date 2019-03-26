const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { products } = require('../models/employee');

router.get('/', (req, res) => {
	
			
	//res.send("HELLO WORLD!");
   products.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err, undefined, 2)); }
    });
	
});

router.post('/', (req, res) => {
    var prod = new products({
		productID: req.body.productID,
		productname: req.body.productname,
		productDescription: req.body.productDescription,
    });
    prod.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in products Save :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    products.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving products :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var prod = {
        productID: req.body.productID,
		productname: req.body.productname,
		productDescription: req.body.productDescription,
    };
    products.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in products Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    products.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in products Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;