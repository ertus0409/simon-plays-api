const spawn = require('child_process').spawn;
const pyProg = spawn('python', ["./../OTT/vienna.py"]);

console.log("H");
pyProg.stdout.on('data', (data) => {
  console.log(data.toString());
});

console.log("Done")
