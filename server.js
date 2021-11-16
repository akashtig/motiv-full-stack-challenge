const express = require('express')
const data = require('./data.json')
const ejs = require('ejs');
const path = require('path');

const PORT = 3000
const app = express()

app.set('view engine','ejs');

// TODO: Serve static assets

// TODO: Implement "sports" API endpoint

// TODO: Serve index.html on "/"
app.get('/',(req, res) => {  
  res.sendFile(path.join(__dirname + '/src/index.html'));

});

app.get('/sports',(req, res) => {  
  // to emulate loading time
  setTimeout(()=>{
    res.sendFile(path.join(__dirname + '/data.json'));
  },1000);

});

app.use(express.static('assets'));
app.use(express.static('src'));


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})
