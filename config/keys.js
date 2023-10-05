require('dotenv').config();
dbPassword = process.env.MONGODB_URI;
console.log(dbPassword);
module.exports = {
    mongoURI: dbPassword
};
