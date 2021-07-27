const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', require('./api'));

app.use('*', (req, res, next) => {
	try {
		res.sendFile(path.join(__dirname,  '../public/index.html'));
	} catch (error) {
		next(error);
	}
});

app.use((req, res, next) => {
	try {
		res.status(404).send('Page not found');
	} catch (error) {
		next(error);
	}
});

app.use((err, req, res, next) => {
	res.status(500).send('Ooops, theres an error');
});

const PORT = 8080;

app.listen(PORT, () => {
	console.log('I am listening to port number', PORT);
});
