const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
};
