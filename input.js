let connection; 

const setupInput = function(conn) {
  connection = conn; 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
}
const handleUserInput = function(key){
   if (key === '\u0003') {
   process.exit();
  } if (key === 'w') {
    connection.write('Move: up');
  } if (key === 'a') {
    connection.write('Move: left');
  } if (key === 's') {
    connection.write('Move: right');
  } if (key === 'd') {
    connection.write('Move: down');
  } if (key === 'z2222') {
    connection.write('Saaaay: LOL')
  } if (key === 'r') {
    connection.write('Say: hayyy')
  }
} 


module.exports = { setupInput };