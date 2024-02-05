const app = require('./app')

const mongodb = require('./data/database')

mongodb();


app.listen(process.env.PORT,()=>{
   console.log("server is running ",process.env.PORT)
})