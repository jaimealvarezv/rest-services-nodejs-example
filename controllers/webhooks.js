
const { request, response } = require ('express');

    
const webhookGet = (req, res = response) => {
    const msg= "Simple WhatsApp Webhook tester</br>There is no front-end, see server.js for implementation!";

    res.json({
       msg: 'Method: GET,  route: /webhook controller'
    });
}

const webhookPost =  (req, res = response) => {

    console.log("Incoming webhook: " + JSON.stringify(req.body));
    res.sendStatus(200).json({
        msg: 'Method: POST,  route: /webhook controller'
     });

}


module.exports = {
    webhookGet, 
    webhookPost
}