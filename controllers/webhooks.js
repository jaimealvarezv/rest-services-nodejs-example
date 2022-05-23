
const { request, response } = require ('express');
const Log = require('../models/log');
    
const webhookGet =  (req, res = response) => {
    const msg1= "Simple WhatsApp Webhook tester</br>There is no front-end, see server.js for implementation!";
   
    res.json({
       msg: 'Method: GET - route: /webhook controller'
    });
}

const webhookPost =  async (req, res = response) => {

    console.log("Incoming webhook: " + JSON.stringify(req.body));
    const {msg} = req.body;

    const log=new Log({msg});
    await log.save();
    console.log(msg);

    res.json({
        msg
     });

}


module.exports = {
    webhookGet, 
    webhookPost
}