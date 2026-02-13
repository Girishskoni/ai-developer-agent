module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/quickbyte3',
  jwtSecret: process.env.JWT_SECRET || 'secret'
};