# Instruction for Setup
- create requests.json file in both server 1 and server 2 with '{}' as the content of the files
- run the server 1 at localhost:3001 by running ```npm install``` and ```node index.js```
- run the server 2 at localhost:3002 by running ```npm install``` and ```node index.js```
- initiate the load balancer at localhost:3000 in load_balancer by ```npm install``` and ```node index.js```
- start testing by either manually making api calls to PORT 3000 or using testing scripts in tester folder by running ```npm install``` and ```node index.js```
### Dockerised Version is Coming Soon