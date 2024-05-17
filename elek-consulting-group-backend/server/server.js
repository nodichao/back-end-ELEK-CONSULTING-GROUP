

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const path = require('path');
const router = require('../routes/router');
const { checkUser } = require('../Middlewares/AuthMiddleware');

require('dotenv').config({ path: '../.env' });
require('../config/dbConfig');
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    credentials: true
}));
//app.use(checkUser);
app.use('/uploads', express.static(path.join(__dirname,'..', 'uploads')));
app.use('/', router);

 

app.listen(process.env.PORT, () => {
    console.log('Serveur démarré à l\'URL localhost:' + process.env.PORT);
});









