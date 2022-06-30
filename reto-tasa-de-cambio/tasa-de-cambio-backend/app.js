require('dotenv').config()
const express = require('express')
const { conectToDb } = require('./config/database')

const app = express()

conectToDb()

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'))
