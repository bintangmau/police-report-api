const { Pool } = require('pg')

const myDatabase = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'police_report',
    password: 'abc123',
    port: 5432
  })

  module.exports = {
      db: myDatabase
  }