const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://msnishutha_db_user:Nishutha123@cluster0.vno7kg2.mongodb.net/bookstoreDB'
    );
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.log('MongoDB connection failed', error);
    process.exit(1);
  }
};

module.exports = connectToDB;
