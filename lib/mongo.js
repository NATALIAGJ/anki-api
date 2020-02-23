const mongoose = require('mongoose')
const { DATA_BASE } = require('../utils')

const config = DATA_BASE[process.env.NODE_ENV || 'development']

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName

const MONGO_URI_PROD = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}`
const MONGO_URI_DEV = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}`
// const MONGO_URI_LOCAL = 'mongodb://localhost:27017/kitfood'

const MONGO_URI = process.env.NODE_ENV === 'production' ? MONGO_URI_PROD : MONGO_URI_DEV

// MONGODB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err
  console.log('Connected to Database')
})
