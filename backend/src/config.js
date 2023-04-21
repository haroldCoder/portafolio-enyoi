const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'postgres'
const DB_PASSWORD = process.env.DB_PASSWORD || '2364144'
const DB_NAME = process.env.DB_NAME || 'request'
const DB_PORT = process.env.DB_PORT || 5432
const PORT = process.env.PORT || 4000
const DATABASE_URL='mysql://vaqdpxcwkdtceow06gb0:pscale_pw_JFTNU5kVE5dzwKfQGjw3EgI9UG1Wj5bq1aLHzi1SgUn@aws.connect.psdb.cloud/portafolio-eny?ssl={"rejectUnauthorized":true}'



module.exports = {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT,
    PORT,
    DATABASE_URL
  }