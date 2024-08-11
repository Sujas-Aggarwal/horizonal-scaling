const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const serverList = ['http://localhost:3001', 'http://localhost:3002'];
let currentServer = 0;

const loadBalancer = http.createServer((req, res) => {
  proxy.web(req, res, { target: serverList[currentServer] });

  // Round-robin load balancing
  currentServer = (currentServer + 1) % serverList.length;
});

loadBalancer.listen(3000, () => {
  console.log('Load balancer running on http://localhost:3000');
});
