
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
 
require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        this.logsPath = '/api/logs';
        this.webhookPath = '/api/webhook';

        // Database connection
        this.connectDB();
        
        // Middlewares
        this.middlewares();

        // App routes
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {

        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
        
    }

    routes() {
       this.app.use( this.usersPath, require('../routes/users'));
       this.app.use( this.logsPath, require('../routes/logs'));
       this.app.use( this.webhookPath, require('../routes/webhooks'));
    }

    listen () {
        this.app.listen(this.port, () =>{
            console.log("Server running on port: ",this.port);
     })   
    }

}

module.exports = Server;