const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
const port = 3000


const manifest = JSON.parse(fs.readFileSync(path.join(process.cwd(), '/manifests/test.json'), 'utf-8'));


app.get('/hello', (req, res) => {
  res.json({
    body:{ manifest},
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})