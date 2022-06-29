const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: 'mysql_db', // the host name MYSQL_DATABASE: node_mysql
    user: 'MYSQL_USER', // database user MYSQL_USER: MYSQL_USER
    password: 'MYSQL_PASSWORD', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
    database: 'Repositories' // database name MYSQL_HOST_IP: mysql_db
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hi There');
});

app.get('/get', (req, res) => {
    const SelectQuery = " SELECT * FROM Repositories";
    db.query(SelectQuery, (err, result) => {
      res.send(result);
    });
});

//Add a git repo project to the database 
app.post("/insert", (req, res) => {
    const repoName = req.body.setRepoName;
    const repoDescription = req.body.setRepoDesc;
    const repoURL = req.body.setRepoURL;
    const insertQuery = "INSERT INTO Repositories (name, description, URL) VALUES (?, ?, ?)";
    db.query(insertQuery, [repoName, repoDescription, repoURL], (err, result) => {
        console.log(result);
    });
});

app.delete("/delete/:repoId", (req, res) => {
    const repoId = req.params.repoId;
    const deleteQuery = "DELETE FROM Repositories WHERE id = ?";
    db.query(deleteQuery, repoId, (err, result) => {
        if (err) console.log(err);
    });
});

app.put("/update/:repoId", (req, res) => {
    const repoName = req.body.setRepoName;
      const repoDescription = req.body.setRepoDesc;
      const repoURL = req.body.setRepoURL;   
    const repoId = req.params.repoId;
      const updateQuery = "Update Repositories SET Repository = ? WHERE id = ?";
      db.query(updateQuery, [repoName, repoDescription, repoURL, repoId], (err, result) => {
          if (err) console.log(err);
      });
});

  app.listen('3001', () => { });