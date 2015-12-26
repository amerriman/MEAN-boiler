var mongoURI = {
  development: 'mongodb://localhost/thing',
  test: 'mongodb://localhost/thing-test',
  production: process.env.MONGOLAB_URI
};


var config = {
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  MONGO_URI: mongoURI,
  SALT_WORK_FACTOR: 10,
  GOOGLE_SECRET: process.env.GOOGLE_SECRET,
};

module.exports = config;
