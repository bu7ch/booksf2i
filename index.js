const express = require('express')
const app = express()

const port = 3000

const mongoose = require('mongoose')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/f2i-books');
  console.log('DATABASE CONNECTED!')
}

const router = require('./routes/categorieRoute')

app.get('/', (req, res) =>{
  res.send('COUCOU')
})



app.use('/categories', router)


app.listen(port, ()=> console.log('listening on port '+port))

//DRY - Don't Repeat Yourself