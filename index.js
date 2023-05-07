require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
