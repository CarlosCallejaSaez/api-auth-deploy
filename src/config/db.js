const mongoose = require('mongoose');

mongoose.set('strict', false)
mongoose.set('strictPopulate', false)
mongoose.set('strictQuery', false)

const connectionDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_STRING) 
      console.log('Conectado a la Base de Datos')
    } catch (error) {
      console.error(`No ha sido posible conectarse a la base de datos, error: ${error}`)
    }
  }
  
  module.exports = {connectionDB}