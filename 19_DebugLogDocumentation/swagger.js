require('dotenv').config()
const PORT=process.env.PORT || 8000
const HOST=process.env.HOST || '127.0.0.1'

const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')
const document={
     info: {
         version: packageJson.version,
         title: packageJson.title,
         description: packageJson.description,
         termsOfService: "http://www.clarusway.com",
         contact: { name: "Clarusway", email: "qadir@clarusway.com" },
         license: packageJson.license,
         host: `${HOST}:${PORT}`,
         basePath: '/',
         schemes: ['http', 'https'],
         securityDefinitions: {
            JWT: {
              type: 'apiKey',
              in: 'header',
              name: 'Authorization',
              description: 'Entry Your AccessToken (JWT) for Login. Example: <b>Bearer <i>...token...<i></b>'
             },
        },
    }
      
}

const routes = ['./index.js']
const outputFile = './swagger.json'
// Create JSON file:
swaggerAutogen(outputFile, routes, document)