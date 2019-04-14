var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

/*
Procedures:
1. Install node js from https://nodejs.org/en/download/
2. After installing node js, open node js command prompt
3. check the node version: node --version
4. check the npm version: npm --v
5. If npm is not available install the npm, 
   most probably npm comes along with node js 
6. make new directiry at any driver, for example D:\node_mysql
7. Run the command: npm install mysql after visiting the node_mysql
   in node js command prompt
   D:\node_mysql\ npm install mysql
8. Run your mysql server, here I have followed my xampp to use mysql database
9. Run your node js file after editing nodepad++ or any editor: 
   cmd: node connections.js
10.Leave from running state: 
   cmd: Ctrl+c

*/