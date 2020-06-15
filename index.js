const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile('public/index_ua.html', {root: __dirname });
})

app.get('/home-ua', (req, res) => {
  res.sendFile('public/index_ua.html', {root: __dirname });
})
app.get('/home-en', (req, res) => {
  res.sendFile('public/index_en.html', {root: __dirname });
})

app.get('/gonchari-ua', (req, res) => {
  res.sendFile('public/index_en.html', {root: __dirname });
})
app.get('/gonchari-en', (req, res) => {
  res.sendFile('public/index_en.html', {root: __dirname });
})

app.get('/rizbyari-ua', (req, res) => {
  res.sendFile('public/index_en.html', {root: __dirname });
})
app.get('/rizbyari-en', (req, res) => {
  res.sendFile('public/index_en.html', {root: __dirname });
})

app.get('/chynbyari-ua', (req, res) => {
  res.sendFile('public/index_en.html', {root: __dirname });
})
app.get('/chynbyari-en', (req, res) => {
  res.sendFile('public/index_en.html', {root: __dirname });
})

app.get('/cv-ua', (req, res) => {
  res.sendFile('public/CV_ua.html', {root: __dirname });
})
app.get('/cv-en', (req, res) => {
  res.sendFile('public/CV_en.html', {root: __dirname });
})

app.listen(PORT, () => {
  console.log('Server has been started . . .');
})