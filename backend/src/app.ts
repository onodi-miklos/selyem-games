// Ideiglenes

const logger = require('./logger')
const path = require('path')
const express = require('express')
const app = express()

// app.use(logger([
//   // "file",
//   // "console"
// ]))

app.use([
  express.json(),
  express.urlencoded({ extended: true }),
  express.static(path.join(__dirname, "./public")),
]);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, "./public")))
})


app.listen(5000, () => {
  console.log('Server listening on port 5000....')
})