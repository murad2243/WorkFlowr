const mongoose = require('mongoose');
require('dotenv').config();

const connection = mongoose.connect("mongodb+srv://murad:murad@cluster0.8j6egxm.mongodb.net/?retryWrites=true&w=majority");

module.exports = connection;