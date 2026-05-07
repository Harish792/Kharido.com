const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const dropIndex = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
    
    const User = mongoose.model('User', new mongoose.Schema({}, { strict: false }));
    await User.collection.dropIndex('userName_1');
    console.log('Index userName_1 dropped successfully');
    process.exit();
  } catch (error) {
    console.error('Error dropping index:', error.message);
    process.exit(1);
  }
};

dropIndex();
