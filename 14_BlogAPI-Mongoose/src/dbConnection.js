/* -------------------------------------------------------------------------- */
/*                     BlogApi MongoDB Database Connection                    */
/* -------------------------------------------------------------------------- */

const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/blogApi')
// const mongoDB = process.env.MONGODB
mongoose.connect(process.env.MONGODB)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB not connected',err))