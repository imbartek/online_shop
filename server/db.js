require('dotenv').config();

const mysql = require('mysql')
const client = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

client.connect(function(err){
  if(err){
    throw err
  }
  console.log('Connect with database has complete :)')
})

module.exports = client;