const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

const chefData =  require('./public/chef.json');

app.get('/', (req, res) => {
  res.send('Welcome to assignment 10 server')
})

app.get('/chef', (req, res)=>{
    res.send(chefData)
})

app.get('/chef/:id', (req, res) =>{
    const id = req.params.id;
    const selectedChef = chefData.find(c=> c.id == id);
    res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})