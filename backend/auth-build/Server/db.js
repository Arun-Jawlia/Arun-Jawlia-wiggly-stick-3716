const mongoose = require('mongoose')
require('dotenv').config()
const Connection = mongoose.connect(process.env.mongoose_url);

module.exports = {Connection};