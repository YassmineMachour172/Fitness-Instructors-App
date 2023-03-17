const mysql = require('mysql')
const express = require('express')
const cors = require('cors');
const nodemailer =require('nodemailer');
const axios = require('axios');
const { USERS_TABLE, CARS_TABLE } = require('./db')

const app = express() // Create express app
const port =  process.env.PORT || 8000 // Port to listen on

app.use(express.json());
app.use(cors()); 

// Define object with db config data
const db_config = {
    user: "admin1",
    host: "carservicedb.cj9a9lermuhv.us-east-1.rds.amazonaws.com",
    password: "12345678",
    database: "sys",
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
app.listen(port, () => {
    console.log(`Car-Service server listening on http://localhost:${port}`)
})