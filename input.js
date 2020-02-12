let connection; 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  process.stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
}
const handleUserInput = function(key){
   if (key === '\u0003') {
   process.exit();
  } if (key === 'w') {
    console.log('Move: up');
  } if (key === 'a') {
    console.log('Move: left');
  } if (key === 's') {
    console.log('Move: right');
  } if (key === 'd') {
    console.log('Move: down');
  } if (key === 'r') {
    conn.write('Say: LOL')
  } if (key === 'r') {
    conn.write('Say: hayyy')
  }
} 

setupInput(handleUserInput);

module.exports = { setupInput };