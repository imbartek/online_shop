const express = require('express')
const app = express()
const port = 3001
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:3000',
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', require('./controllers/users/usersController.js'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})