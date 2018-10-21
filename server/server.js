// IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const _ = require("lodash");
const spawn = require('child_process').spawn;
const path = require('path');

// CONFIGURATION
var app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());


// answers x-codes coreesponding table will be
//  added here



//  ROUTES

// /answers
app.post('/answers', (req, res) => {

  console.log("POST /answers");
  console.log();
  console.log(req.body);

  const x0 = req.body[0]
  const x1 = req.body[1]
  const x2 = req.body[2]
  const x3 = req.body[3]
  const x4 = req.body[4]
  const x5 = req.body[5]
  const x6 = req.body[6]

  const pyProg = spawn('python', ["./OTT/vienna.py",x0,x1,x2,x3,x4,x5,x6]);

  pyProg.stdout.on('data', (data) => {
    const result = data.toString();
    console.log(result);
    res.status(200).send(result);
  });

});

// FOR SAMPLE DATA
// app.get('/sample', (req, res) => {
//
//   const pyProg = spawn('python', ['-u',"./OTT/vienna.py"]);
//
//   pyProg.stdout.on('data', function (data) {
//     const result = data.toString();
//     console.log(result);
//     res.status(200).send(result);
//   });

// });

app.get('/', (req, res) => {
  res.send("hello world");
});





app.listen(port, () => {
  console.log(`App started on port ${port}`);
})
