require('dotenv/config');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const db = mongoose.connection;
const port = 1337;
const app = express();

/* middleware */
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use(express.json());

app.listen(port, () => {
    console.log(`🍽  Hello from the server on port: ${port} 🍽`);
});

/* connect to mongoose */
mongoose.connect(
    /*
      create a .env file in the root directory with path to DB
      eg. DB_CONN=mongodb://127.0.0.1:27017/<DBname>
   */
    process.env.DB_CONN,
    { useNewUrlParser: true },
);

/* verify connection */
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('⛓  Successful connection to mongodb! ⛓'); });

/* routes */
// const allProjects = require('./routes/allProjects');

// app.use('/projects', allProjects);
