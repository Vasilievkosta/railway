const express = require('express');
// const db = require('./db');

// console.log(JSON.stringify(process.env))

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {	
	console.log('start with new project and database');
	res.send('start!!');
});

app.get('/api', (req, res) => {		
	res.send('<h2>API</h2>');
});

app.use((req, res) => {
	res.status(404).send('<h2>No Page Found</h2>');
});

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log(`Server is starting on port ${PORT}`);
});