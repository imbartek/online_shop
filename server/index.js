const express = require('express')
const app = express()
const port = 3001
require('dotenv').config();
const cors = require('cors')
const session = require('express-session')
const bodyParser = require('body-parser')

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.use(cors({
  origin: 'http://localhost:3000',
}))

const sessionMiddleware = session({
  credentials: true,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  name: 'sid',
  cookie: {
    secure: 'auto',
    httpOnly: true,
    expires: 1000 * 60 * 60 * 24 * 7,
    sameSite: 'lax'
  }
})
app.use(sessionMiddleware)

//controllers
app.use('/users', require('./controllers/users/usersController.js'));
app.use('/products', require('./controllers/products/productsController.js'));
app.use('/session', require('./controllers/users/session.js'));
app.use('/faker', require('./controllers/faker/faker.js'));

//default
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})