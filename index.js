'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

const mongooseOptions = {
    useNewUrlParser:true,
    useCreateIndex: true,
};

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

require('./lib/app.js').start(process.env.PORT);