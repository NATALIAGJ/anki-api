require('dotenv').config()

const CONFIG = {
  development: {
    dev: process.env.NODE_ENV,
    port: process.env.PORT,
    url: process.env.URL_WEB,
    sentryDns: process.env.SENTRY_DNS,
    sentryId: process.env.SENTRY_ID,
    authAdminUsername: process.env.AUTH_ADMIN_USERNAME,
    authAdminPassword: process.env.AUTH_ADMIN_PASSWORD,
    authAdminEmail: process.env.AUTH_ADMIN_EMAIL,
    authJwtSecret: process.env.AUTH_JWT_SECRET
  },
  production: {
    dev: process.env.NODE_ENV,
    port: process.env.PORT,
    url: process.env.URL_WEB,
    sentryDns: process.env.SENTRY_DNS,
    sentryId: process.env.SENTRY_ID,
    authAdminUsername: process.env.AUTH_ADMIN_USERNAME,
    authAdminPassword: process.env.AUTH_ADMIN_PASSWORD,
    authAdminEmail: process.env.AUTH_ADMIN_EMAIL,
    authJwtSecret: process.env.AUTH_JWT_SECRET
  }
}

const JW_TOKEN = {
  development: {
    authAdminUsername: process.env.AUTH_ADMIN_USERNAME,
    authAdminPassword: process.env.AUTH_ADMIN_PASSWORD,
    authAdminEmail: process.env.AUTH_ADMIN_EMAIL,
    authJwtSecret: process.env.AUTH_JWT_SECRET
  },
  production: {
    authAdminUsername: process.env.AUTH_ADMIN_USERNAME,
    authAdminPassword: process.env.AUTH_ADMIN_PASSWORD,
    authAdminEmail: process.env.AUTH_ADMIN_EMAIL,
    authJwtSecret: process.env.AUTH_JWT_SECRET
  }
}

const DATA_BASE = {
  development: {
    dbUser: process.env.DB_USER_DEV,
    dbPassword: process.env.DB_PASSWORD_DEV,
    dbHost: process.env.DB_HOST_DEV,
    dbPort: process.env.DB_PORT_DEV,
    dbName: process.env.DB_NAME_DEV
  },
  production: {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME
  }
}

module.exports = {
  CONFIG,
  JW_TOKEN,
  DATA_BASE
}
