const app = require('./app')

const mongodb = require('./data/database')

mongodb();


app.listen(3500,()=>{
   console.log("server is running ")
})