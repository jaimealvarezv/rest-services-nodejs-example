
const express = require('express');
const cors = require('cors');

require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        // Middlewares
        this.middlewares();

        // App routes
        this.routes();
    }

    middlewares() {

        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
        
    }

    routes() {
       this.app.use( this.usersPath, require('../routes/users'));
    }

    listen () {
        this.app.listen(this.port, () =>{
            console.log("Server running on port: ",this.port);
     })   
    }

}

module.exports = Server;