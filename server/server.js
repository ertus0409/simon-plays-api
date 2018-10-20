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

  const pyProg = spawn('python', ['-u',"./OTT/vienna.py"]);

  pyProg.stdout.on('data', function (data) {
    if (result != null) {
      const result = data.toString();
      console.log(result);
      res.status(200).send(result);
    } else {
      res.status(404).send();
    }

  });

});

app.get('/', (req, res) => {
  res.send("hello world");
});





app.listen(port, () => {
  console.log(`App started on port ${port}`);
})
