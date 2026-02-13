module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/quickbyte',
  jwtSecret: process.env.JWT_SECRET || 'secret'
};