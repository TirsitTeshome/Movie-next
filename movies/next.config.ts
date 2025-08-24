const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  // You can add other Next.js config options here if needed
  env: {
    // This exposes your TMDB_API_KEY to your Next.js app at build time.
    // Note: This will be available in both server and client environment.
    // If you want to expose only on server side, do NOT define here.
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_ACCESS_TOKEN: process.env.TMDB_ACCESS_TOKEN,
  },
};
