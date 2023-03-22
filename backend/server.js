const mysql = require('mysql')
const express = require('express')
const cors = require('cors');
const { USERS_TABLE, CARS_TABLE } = require('./db')

const app = express() // Create express app
const port =  process.env.PORT || 8000 // Port to listen on

app.use(express.json());
app.use(cors()); 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "&Yassmine172",
    database: "workoutin"
  });
  
  con.connect(function(err) {
    if (err) throw err; 
    console.log("Connected!");
  });
/*// Define object with db config data
const db_config = {
    user: "root",
    host: "localhost",
    password: "&Yassmine172",
    database: "workoutin",
    port:"3306",
};

let databaseConnection

// Create connection to mySql
function handleDisconnect() {
    databaseConnection = mysql.createConnection(db_config) 

    // The server is either down or restarting (takes a while sometimes).
    databaseConnection.connect((err) => {
        if (err) {
            console.log('error when connecting to db:', err);
            // We introduce a delay before attempting to reconnect, to avoid a hot loop, and to allow our node script to process asynchronous requests in the meantime.
            // If you're also serving http, display a 503 error.
            setTimeout(handleDisconnect, 2000);
        }
    });

    databaseConnection.on('error', (err) => { // sign a function to error event
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { 
            // Connection to the MySQL server is usually lost due to either server restart, 
            // or a connnection idle timeout (the wait_timeout server variable configures this)
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();

/* listen to port */
/*app.listen(port, () => {
    console.log(`Car-Service server listening on http://localhost:${port}`)
})*/