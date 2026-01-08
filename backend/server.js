require("dotenv").config();

// imports modules & dependencies
const app = require('./src/app');
const logger = require('./src/middleware/winston.logger');

// FIXED: use correct PORT variable
const PORT = process.env.PORT || 5000;

// FIXED: Optional BASE URL
const BASE_URL = process.env.APP_BASE_URL || `http://localhost:${PORT}`;

// start server
app.listen(PORT, () => {
  logger.info(`App server running on: ${BASE_URL}`);
});
