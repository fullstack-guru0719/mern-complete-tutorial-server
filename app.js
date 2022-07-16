// app.js

const express = require('express');

const mongoose = require('mongoose');

const dbConfig = require('./config/db');

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose
    .connect(dbConfig.db, {
        useNewUrlParser: true,
    })
    .then(
        () => {
            console.log('Database sucessfully connected!')
        },
        (error) => {
            console.log('Could not connect to database : ' + error)
        },
    )

const app = express();


app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));