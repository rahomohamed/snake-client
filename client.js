const net = require("net");
const connect = function() {
const conn = net.createConnection({
  host: "172.46.0.236",
  port: 50541
});

conn.setEncoding("utf8");

conn.on("data", () => {
  console.log("you ded cuz you idled");
  return conn;
});

conn.on('connect', () => {
console.log('Successfully connected to game server!');
conn.write('Name: RHM');
});

conn.on('connect', () => {
conn.write('Move: up');
conn.write('Move: down');
conn.write('Move: left');
conn.write('Move: right');
  });
}

module.exports = { connect };