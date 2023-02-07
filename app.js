const express = require('express');
const cors = require('cors');
const db = require('./db');

// console.log(JSON.stringify(process.env))

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {	
	console.log('start for Railway');
	res.send('start !');
});

app.get('/message', (req, res) => {		
	res.send({message: 'sometimes message'});
});

app.get('/api', (req, res) => {		
	res.send('<h2>API</h2>');
});

app.get('/api/users', async (req, res) => {
	const users = await db.query('SELECT * FROM Users');
	
	console.table(users.rows);
	res.json(users.rows);
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