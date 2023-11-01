 /* -------------------------------------------------------------------------- */
 /*                         BlogApi Project Index File                         */
 /* -------------------------------------------------------------------------- */

 'use strict'

 const express = require ('express')
 const app = express()
 require('dotenv').config()
 const PORT = process.env.PORT || 8000

 // DB connection
 require('./src/dbConnection')

// errorHandler
app.use(require('./src/errorHandler'))

// router
app.use('/',require('./src/routes/blogRoutes'))

// Json formati
app.use(express.json())


 app.listen(8000,() => console.log('server is running on http://127.0.0.1:' + PORT))