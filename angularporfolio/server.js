const express = require("express");
const path  = require('path');
const app = express();

const  routes = require('./server/routes/routes');

//middleware
app.use(express.static(path.join(__dirname,'dist/angularporfolio')));

app.use('/routes', routes);

app.get('*',(req,res) => {
	res.sendFile(path.join(__dirname,'dist/angularporfolio/index.html'));
});


const port = process.env.PORT || 4600;

app.listen(port, function(){
	
console.log(`Running at PORT ${port}`);
	
});