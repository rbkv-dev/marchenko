const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('public/index.html', {root: __dirname });
})

app.listen(PORT, () => {
  console.log('Server has been started . . .');
})