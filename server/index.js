const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', require('./controllers/users/usersController'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})