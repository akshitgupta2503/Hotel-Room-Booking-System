// backend/src/config/connect.mongo.db.js  (or wherever file lives)
const mongoose = require('mongoose');
const logger = require('../middleware/winston.logger');

mongoose.set('strictQuery', false);

const connectDatabase = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    logger.error('MONGO_URI is undefined. Did you load .env?');
    return;
  }

  try {
    logger.info('Attempting MongoDB connection...');
    // strong, explicit options for Atlas + helpful timeouts
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      // do NOT disable TLS in production; allow only for debugging if needed
      tls: true,
    });
    logger.info('Connected to MongoDB successfully!');
  } catch (error) {
  console.error("FULL MONGODB ERROR STACK:");
  console.error(error);
  logger.error("Error connecting to MongoDB: " + error.message);
}
};

module.exports = connectDatabase;
