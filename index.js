const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello hahahahaha')
})

app.listen(3000)