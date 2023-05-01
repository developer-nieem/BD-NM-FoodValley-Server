const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())
app.get('/', (req, res) => {
  res.send('Welcome to assignment 10 server')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})