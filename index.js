const express = require('express')

const app = express()

app.all('/*', (req, res) => {
  res.send('Hello Yann!')
  return
})

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
