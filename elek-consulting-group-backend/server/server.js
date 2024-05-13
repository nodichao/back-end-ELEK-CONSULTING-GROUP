

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const router = require('../routes/router');

require('dotenv').config({ path: '../.env' });
require('../config/dbConfig');
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    credentials: true
}));
app.use('/', router);
 

app.listen(process.env.PORT, () => {
    console.log('Serveur démarré à l\'URL localhost:' + process.env.PORT);
});









