const mongoose = require('mongoose')
const dontenv = require('dotenv');

dontenv.config({ path: './config.env' });


const DB = process.env.DATABASE.replace(
    '<PASSWORD>'
    , process.env.DATABASE_PASSWORD
    );
mongoose.connect(DB, {
    // useNewUrlParser: true,
}).then(()=> {console.log("database connected successfully")})
// console.log(process.env)



const app = require('./app');
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App listening to port ${port}....`)
})