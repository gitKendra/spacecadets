const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile('./public/index.html'))


// invalid route
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})
// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.listen(port, () => console.log(`App listening on port ${port}!`))