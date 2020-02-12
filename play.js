const { connect } = require('./client');

console.log('Connecting ...');
 connect();

 const setupInput = function(cb) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on('data', (key) => {
    cb(key);
  });
  return stdin;
}
const handleUserInput = function(data){
   if (data === '\u0003') {
   process.exit();
  }
}

setupInput(handleUserInput);

