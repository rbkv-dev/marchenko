const express = require('express');
const bodyParser = require('body-parser');

var cors = require('cors')
const app = express()

const PORT = process.env.PORT || 8080
// app.use(bodyParser);
app.use(cors());
app.use(express.static(__dirname + '/public'));

const albom = require("./public/js/lab_4.json");
app.get('/photos/:id', function (req, res, next) {
  return res.send(albom.photos.filter(e => e.id === req.params.id));
});

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
  res.sendFile('public/page1_ua.html', {root: __dirname });
})
app.get('/gonchari-en', (req, res) => {
  res.sendFile('public/page1_en.html', {root: __dirname });
})

app.get('/rizbyari-ua', (req, res) => {
  res.sendFile('public/page2_ua.html', {root: __dirname });
})
app.get('/rizbyari-en', (req, res) => {
  res.sendFile('public/page2_en.html', {root: __dirname });
})

app.get('/chynbyari-ua', (req, res) => {
  res.sendFile('public/page3_ua.html', {root: __dirname });
})
app.get('/chynbyari-en', (req, res) => {
  res.sendFile('public/page3_en.html', {root: __dirname });
})

app.get('/cv-ua', (req, res) => {
  res.sendFile('public/CV_ua.html', {root: __dirname });
})
app.get('/cv-en', (req, res) => {
  res.sendFile('public/CV_en.html', {root: __dirname });
})

app.get('/lab-4', (req, res) => {
  res.sendFile('public/lab_4.html', {root: __dirname });
})
app.get('/lab-5', (req, res) => {
  res.sendFile('public/lab_5.html', {root: __dirname });
})


app.listen(PORT, () => {
  console.log('Server has been started . . .');
})