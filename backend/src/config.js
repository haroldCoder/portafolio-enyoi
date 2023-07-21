//crear credenciales para la db y prod
const DB_HOST = process.env.DB_HOST || 'containers-us-west-110.railway.app'
const DB_USER = process.env.DB_USER || 'postgres'
const DB_PASSWORD = process.env.DB_PASSWORD || 'SbII75hIuKi9DamsWhGk'
const DB_NAME = process.env.DB_NAME || 'railway'
const DB_PORT = process.env.DB_PORT || 6479
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