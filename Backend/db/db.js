const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/ubar-clone';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { 
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
module.exports = mongoose;